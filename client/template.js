/** New **/
Template.new.joiners = function() {
    return [
    {name:'wei.gao'},
    {name:'aab', amount:32}
    ];
};

Template.new.showAmount = function(item) {

};


/** Home **/
Template.lastRecord.headers = ['日期', '商户', '总金额', '参与人'];

Template.lastRecord.items = function() {
    return [{
        date: '2013-4-4',
        loc: 'SA',
        amount: 44.4,
        player: [{
            id: 'villa.gao@dianping.com',
            name: 'wei.gao',
            amount:24.4,
            payer: true
        }, {
            id: 'aaab@dianping.com',
            name: 'aab',
            amount:20
        }]
    }];
};


Template.header.navItems = function() {
    return [{
        link: 'home',
        label: "首页",
        active: true
    }, {
        link: 'new',
        label: '新增纪录'
    }, {
        link: 'balance',
        label: '个人帐单'
    }, {
        link: 'history',
        label: '历史纪录查询'
    }];
};

Template.header.title = "AAB";


Template.header.events({
    'click .nav a': function(e, tmpl) {
        e.stopImmediatePropagation();
        $('#content >*').removeClass('active');
        $('#'+this.link).addClass('active');

        $('#header .nav li').removeClass('active');
        $("#header .nav a[link='"+this.link+"']").parent().addClass('active');
    }
});