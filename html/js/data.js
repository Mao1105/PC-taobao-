var goodData=[
    {
        shopName:'生如海洋 men sh',
        type:'clothing',
        commodityName:'夏日拖鞋潮男韩版潮流男士一字拖防滑凉鞋夏天个性沙滩潮拖凉拖男',
        color:'028黑蜂窝',
        size:'41',
        promotion:'true',
        originalPrice:79.00,
        unitPrice:49.00,
        promotionContent:'新品大特价',
        promotionDifference:30.00,
        maxNum:5,
        goodImgUr:'',
        count:1,
        className:'boyShoes',
        checked:false

    },
    {
        shopName:'ixu服饰旗舰店',
        type:'clothing',
        commodityName:'韩版中长款纯色休闲青年风衣英伦秋冬男毛呢料宽松外套时尚大衣',
        color:'卡其色有纽扣',
        size:'L',
        promotion:'true',
        originalPrice:416.00,
        unitPrice:208.00,
        promotionContent:'新品优惠',
        promotionDifference:30.00,
        maxNum:4,
        goodImgUrl:'',
        count:1,
        className:'fashionClo',
        checked:false
    },
    {
        shopName:'李宁官方网店',
        type:'clothing',
        commodityName:'李宁2016新款男子篮球鞋音速3高帮反弹篮球场地鞋ABAL031',
        color:'荧光果粉/木梅红',
        size:'42',
        promotion:'true',
        originalPrice:539.00,
        unitPrice:339.00,
        promotionContent:'秋季特惠',
        promotionDifference:200.00,
        maxNum:2,
        goodImgUrl:'',
        count:1,
        className:'lining-bas',
        checked:false
    },
    {
        shopName:'adidas官方旗舰店',
        type:'clothing',
        commodityName:'adidas 阿迪达斯 篮球 男子 篮球鞋 Regulate',
        color:'银金属/深藏青蓝/红色',
        size:'43.5',
        promotion:'false',
        originalPrice:'',
        unitPrice:478.00,
        promotionContent:'',
        promotionDifference:'',
        maxNum:8,
        goodImgUrl:'',
        count:1,
        className:'adidas',
        checked:false
    },
    {
        shopName:'NIKE官方旗舰店',
        type:'clothing',
        commodityName:'Nike 耐克官方 ZOOM KOBE VENOMENON 5 EP 男子篮球鞋',
        color:'氯蓝/鲜红橙/煤黑/白/冷灰黑',
        size:'42.5',
        promotion:'false',
        originalPrice:'',
        unitPrice:949.00,
        promotionContent:'',
        promotionDifference:'',
        maxNum:2,
        goodImgUrl:'',
        count:1,
        className:'Nike',
        checked:false
    },
    {
        shopName:'zsuo走索旗舰店',
        type:'clothing',
        commodityName:' Z．Suo/走索男鞋马丁靴男秋冬户外靴子沙漠靴男军靴皮靴情侣款潮',
        color:'ZS988H黑色',
        size:'42',
        promotion:'true',
        originalPrice:452.00,
        unitPrice:339.00,
        promotionContent:'火热抢购中',
        promotionDifference:113.00,
        maxNum:6,
        goodImgUrl:'',
        count:1,
        className:'xuezi',
        checked:false
    },
    {
        shopName:'张君雅小妹妹旗舰',
        type:'food',
        commodityName:' 台湾进口零食张君雅小妹妹12包零食组合甜甜圈捏脆面点心面礼包',
        taste:'12包零食组合',
        promotion:'true',
        originalPrice:79.00,
        unitPrice:39.00,
        promotionContent:'11月狂欢购',
        promotionDifference:40.00,
        maxNum:1,
        goodImgUrl:'',
        count:1,
        className:'zhangjunya',
        checked:false
    }
]

var m=new Vue({
    el:'.main',
    data:{
        data:goodData,
        inquiryMes:[],
        text:''
    },
    computed:{
        totalPrice:function(){
              var totalPrice = 0.00;
              this.data.filter(function(aMes){
                return aMes.checked;
              }).map(function(aMes){
                return aMes.count*aMes.unitPrice
              }).forEach(function(aMes){
                totalPrice += aMes;
              });
                return totalPrice;
        },
        sum:function(){
            var sum=0;
             this.data.filter(function(aMes){
                return aMes.checked;
              }).map(function(aMes){
                return parseInt(aMes.count)
              }).forEach(function(aMes){
                sum+=parseInt(aMes)
              });
              return sum;
        },
        checkedAll:{
            get:function(){
                return this.data.filter(function(aMes){ 
                  return aMes.checked == true;
                }).length == this.data.length;
            },
            set:function(val){
                this.data.forEach(function(aMes){
                  aMes.checked = val;
                });
            }
        }
    },
    watch:{
       
    },
    methods:{
        addNum:function(mes){
            if(mes.count<mes.maxNum){
                mes.count++;
            }
        },
        deleteNum:function(mes){
            if(mes.count>0){
                mes.count--;
            }
        },
        deleteGood:function(index){
            this.data.splice(index,1)
        },
        inquiry:function(){
            var script = document.createElement('script');
            text=this.text;
            setTimeout(function(){
                script.src = 'https://suggest.taobao.com/sug?code=utf-8&q='+text+'&_ksTS=1477971900186_443&callback=fn&k=1&area=c2c&bucketid=14';
            document.body.appendChild(script);
            },1000)
        },
        substituteMes:function(mes){
            this.text=mes;
            this.inquiryMes=[]
        }
    }
})

function fn(data){
    var tempArr=[];
    for(var i=0;i<data.result.length;i++){
        tempArr.push(data.result[i][0]);
    }
    m['inquiryMes']=tempArr;
}