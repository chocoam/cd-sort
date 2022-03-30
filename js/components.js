Vue.component('checkbox', {
    props: ['label', 'text'],
    template: '<li><label :for="label"><input name type="checkbox" :id="label" data-group="0"><span>{{text}}</span></label></li>'
})

Vue.component('checkbox2', {
    props: ['label', 'text'],
    template: '<li><label :for="label"><input name type="checkbox" :id="label" data-group="1"><span>{{text}}</span></label></li>'
})

Vue.component('item', {
    props: ['label', 'text'],
    template: '<li class="item active" :class="label"><slot /></li>'
})

Vue.component('resetbtn', {
    template: `<button @click="reset" type="button">reset</button>`
})



var app = new Vue({
    el: '#app',
    data: () => ({
        a: 3850,
        a10off: 3465,
        b: 3850,
        c: 3300,
        set: 11000,
        set10off: 9000,
        fc: 4950,
        anime: 3300,
        jo1A: 0,
        jo1B: 0,
        jo1C: 0,
        jo1Set: 0,
        jo1Fc: 0,
        TowerA: 0,
        TowerB: 0,
        TowerC: 0,
        TowerSet: 0,
        HmvA: 0,
        HmvB: 0,
        HmvC: 0,
        HmvSet: 0,
        TsutayaA: 0,
        TsutayaB: 0,
        TsutayaC: 0,
        TsutayaSet: 0,
        RakutenA: 0,
        RakutenB: 0,
        RakutenC: 0,
        RakutenSet: 0,
        SevenA: 0,
        SevenB: 0,
        SevenC: 0,
        SevenSet: 0,
        AmazonA: 0,
        AmazonB: 0,
        AmazonC: 0,
        AmazonSet: 0,
        SonyA: 0,
        SonyB: 0,
        SonyC: 0,
        SonySet: 0,
        WingA: 0,
        WingB: 0,
        WingC: 0,
        WingSet: 0,
        NormalA: 0,
        NormalB: 0,
        NormalC: 0,
        NormalSet: 0,
        Anime: 0,
        FortuneSet: 0,
        LaponeA: 0,
        LaponeB: 0,
        LaponeC: 0,
        LaponeSet: 0,
        isGnav: false,
    }),
    computed: {
        sumJo1A: function() { return this.a * this.jo1A },
        sumJo1B: function() { return this.b * this.jo1B },
        sumJo1C: function() { return this.c * this.jo1C },
        sumJo1Set: function() { return this.set * this.jo1Set },
        sumJo1Fc: function() { return this.fc * this.jo1Fc },
        totalJo1: function() { return Math.ceil(this.sumJo1A + this.sumJo1B + this.sumJo1C + this.sumJo1Set + this.sumJo1Fc) },
        //タワレコ
        sumTowerA: function() { return this.a * this.TowerA },
        sumTowerB: function() { return this.b * this.TowerB },
        sumTowerC: function() { return this.c * this.TowerC },
        sumTowerSet: function() { return this.set * this.TowerSet },
        totalTower: function() { return Math.ceil(this.sumTowerA + this.sumTowerB + this.sumTowerC + this.sumTowerSet) },
        //HMV
        sumHmvA: function() { return this.a * this.HmvA },
        sumHmvB: function() { return this.b * this.HmvB },
        sumHmvC: function() { return this.c * this.HmvC },
        sumHmvSet: function() { return this.set * this.HmvSet },
        totalHmv: function() { return Math.ceil(this.sumHmvA + this.sumHmvB + this.sumHmvC + this.sumHmvSet) },
        //TSUTAYA
        sumTsutayaA: function() { return this.a * this.TsutayaA },
        sumTsutayaB: function() { return this.b * this.TsutayaB },
        sumTsutayaC: function() { return this.c * this.TsutayaC },
        sumTsutayaSet: function() { return this.set * this.TsutayaSet },
        totalTsutaya: function() { return Math.ceil(this.sumTsutayaA + this.sumTsutayaB + this.sumTsutayaC + this.sumTsutayaSet) },
        //楽天
        sumRakutenA: function() { return this.a10off * this.RakutenA },
        sumRakutenB: function() { return this.b * this.RakutenB },
        sumRakutenC: function() { return this.c * this.RakutenC },
        sumRakutenSet: function() { return this.set10off * this.RakutenSet },
        totalRakuten: function() { return Math.ceil(this.sumRakutenA + this.sumRakutenB + this.sumRakutenC + this.sumRakutenSet) },
        //セブン
        sumSevenA: function() { return this.a * this.SevenA },
        sumSevenB: function() { return this.b * this.SevenB },
        sumSevenC: function() { return this.c * this.SevenC },
        sumSevenSet: function() { return this.set * this.SevenSet },
        totalSeven: function() { return Math.ceil(this.sumSevenA + this.sumSevenB + this.sumSevenC + this.sumSevenSet) },
        //Amazon
        sumAmazonA: function() { return this.a * this.AmazonA },
        sumAmazonB: function() { return this.b * this.AmazonB },
        sumAmazonC: function() { return this.c * this.AmazonC },
        sumAmazonSet: function() { return this.set * this.AmazonSet },
        totalAmazon: function() { return Math.ceil(this.sumAmazonA + this.sumAmazonB + this.sumAmazonC + this.sumAmazonSet) },
        //Sony
        sumSonyA: function() { return this.a * this.SonyA },
        sumSonyB: function() { return this.b * this.SonyB },
        sumSonyC: function() { return this.c * this.SonyC },
        sumSonySet: function() { return this.set * this.SonySet },
        totalSony: function() { return Math.ceil(this.sumSonyA + this.sumSonyB + this.sumSonyC + this.sumSonySet) },
        //ウィング
        sumWingA: function() { return this.a * this.WingA },
        sumWingB: function() { return this.b * this.WingB },
        sumWingC: function() { return this.c * this.WingC },
        sumWingSet: function() { return this.set * this.WingSet },
        totalWing: function() { return Math.ceil(this.sumWingA + this.sumWingB + this.sumWingC + this.sumWingSet) },
        //一般
        sumNormalA: function() { return this.a * this.NormalA },
        sumNormalB: function() { return this.b * this.NormalB },
        sumNormalC: function() { return this.c * this.NormalC },
        sumNormalSet: function() { return this.set * this.NormalSet },
        totalNormal: function() { return Math.ceil(this.sumNormalA + this.sumNormalB + this.sumNormalC + this.sumNormalSet) },
        //アニメ
        sumAnime: function() { return this.anime * this.Anime },
        totalAnime: function() { return this.sumAnime },
        //fortune
        sumFortuneSet: function() { return this.set * this.FortuneSet },
        totalFortune: function() { return this.sumFortuneSet },
        //Lapone
        sumLaponeA: function() { return this.a * this.LaponeA },
        sumLaponeB: function() { return this.b * this.LaponeB },
        sumLaponeC: function() { return this.c * this.LaponeC },
        sumLaponeSet: function() { return this.set * this.LaponeSet },
        totalLapone: function() { return Math.ceil(this.sumLaponeA + this.sumLaponeB + this.sumLaponeC + this.sumLaponeSet) },
        //合計
        total: function() { return Math.ceil(this.totalJo1 + this.totalTower + this.totalHmv + this.totalTsutaya + this.totalRakuten + this.totalSeven + this.totalAmazon + this.totalSony + this.totalWing + this.totalNormal + this.totalAnime + this.totalFortune + this.totalLapone) },
    },
    methods: {
        toggleGnav() {
            this.isGnav = !this.isGnav
        },
        reset: () => {
            Object.assign(app.$data, app.$options.data());
        },
    },
})