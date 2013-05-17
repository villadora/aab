// ==========================
// Home
// ==========================
Template.lastRecord.headers = function() {
    return ['#','日期', '商户', '总金额', '参与人'];
};

Template.lastRecord.items = function() {
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
