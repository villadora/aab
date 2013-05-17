// ==========================
// Balance
// ==========================
Template.balance.pagers = function() {
    return [{
        page: 1,
        active: true
    }, {
        page: 2
    }, {
        page: '...',
        disable: true
    }, {
        page: 8
    }, {
        page: 9
    }]
};


Template.balance.headers = function() {
    return ['日期', '商户', '总金额', '参与人'];
};

Template.balance.items = function() {
    return [{
        date: '2013-4-4',
        loc: 'SA',
        amount: 44.4,
        player: [{
            id: 'villa.gao@dianping.com',
            name: 'wei.gao',
            amount: 24.4,
            payer: true
        }, {
            id: 'aaab@dianping.com',
            name: 'aab',
            amount: 20
        }]
    }];
};
