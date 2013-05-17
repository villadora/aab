// ==========================
// Helpers
// ==========================
Handlebars.registerHelper("equal", function(a, b, options) {
    return a == b;
});

Handlebars.registerHelper('mod', function(a, b, options) {
    console.log(a, b, a % b);
    return a % b;
})

Handlebars.registerHelper("stripes", function(array, options) {
    if (array && array.length > 0) {
        var buffer = "";
        for (var i = 0, j = array.length; i < j; i++) {
            var item = array[i];
            if (i % 2 == 0) buffer += options.inverse(item);
            else buffer += options.fn(item);
        }

        return buffer;
    }
});


Handlebars.registerHelper("groupBy", function(options) {
    var array = options.hash.array || [],
        num = options.hash.num || 2;
    if (array && array.length > 0) {
        var ary = array.concat(),
            buffer = '';
        while (ary.length > 0) {
            var grp = ary.splice(0, num);
            buffer += options.fn(grp);
        }
    }
    return buffer;
});

Handlebars.registerHelper("each_with_index", function(array, fn) {
    var buffer = "";
    for (var i = 0, j = array.length; i < j; i++) {
        var item = array[i];
        item['index'] = i + 1;

        buffer += fn(item);
    }

    return buffer;
});

// ==========================
// Header
// ==========================
Template.header.navItems = function() {
    return [{
        link: 'home',
        label: "首页",
        active: true
    }, {
        link: 'new',
        label: '新增纪录'
    }, {
        link: 'account',
        label: '个人帐单'
    }, {
        link: 'balance',
        label: '历史纪录查询'
    }];
};

Template.header.title = "AAB";

Template.header.events({
    'click .nav a': function(e, tmpl) {
        e.stopImmediatePropagation();
        $('#content >*').removeClass('active');
        $('#' + this.link).addClass('active');

        $('#header .nav li').removeClass('active');
        $("#header .nav a[link='" + this.link + "']").parent().addClass('active');
    },
    'click .login .btn.signin': function(e, tmpl) {
        console.log(this);
        Meteor.loginWithGoogle(function(error) {
            if (error) {
                return console.log(error);
//                https://accounts.google.com/AccountChooser?service=lso&continue=https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%3Fscope%3Dopenid%2Bprofile%2Bemail%2Bhttps%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%26response_type%3Dcode%26access_type%3Donline%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A3000%2F_oauth%2Fgoogle%3Fclose%26state%3D4yhFnHLfYf8527taE%26client_id%3D826031576233.apps.googleusercontent.com%26hl%3Dzh-CN%26from_login%3D1%26as%3D-4ae962307794a513&btmpl=authsub&hl=zh_CN
            }
        });
    }
});