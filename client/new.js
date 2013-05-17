// ==========================
// New
// ==========================
Template.newRecord.joiners = function() {
    return [{
        name: 'wei.gao'
    }, {
        name: 'aab',
        amount: 32
    }];
};

Template.newRecord.rendered = function() {
    $(this.find('.datepicker')).datepicker('update', new Date());
};

Template.newRecord.showAmount = function(item) {

};


Template.newRecord.persons = function() {
    return [{
        value:'wei.gao',
        label:'wei.gao'
    },{
        value:'aab',
        label:'aa'
    }, {
        value:'a',
        label:'a'
    }, {
        value:'dxxx',
        label:'adsfasd'
    }];
};

Template.newRecord.events({
    'click #newJoinerModal add': function(e, tpl) {
        // click on new added
    }
});
