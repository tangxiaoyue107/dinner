// 数据
var caiping = [
  {
    title:'今日特价',
    caiping:[
      {
        name:'手拍黄瓜',
        price:8,
        imgurl:'../img/cai/huanggua.jpg',
      },
      {
        name:'酸辣海带丝',
        price:7,
        imgurl:'../img/cai/haidaisi.jpg',
      },
      {
        name:'红烧鱼',
        price:32,
        imgurl:'../img/cai/hongshaoyu.jpg',
      },
    ]
  },
  {
    title:'特色菜',
    caiping:[
      {
        name:'红焖肉',
        price:35,
        imgurl:'../img/cai/hongmenrou.jpg',
      },
      {
        name:'四川冒菜',
        price:25,
        imgurl:'../img/cai/maicai.jpg',
      },
      {
        name:'酸汤肥牛饭',
        price:20,
        imgurl:'../img/cai/suantangfeiniu.jpg',
      },
      {
        name:'红烧鱼',
        price:32,
        imgurl:'../img/cai/hongshaoyu.jpg',
      },
    ]
  },
  {
    title:"来点'凉菜'",
    caiping:[
      {
        name:'手拍黄瓜',
        price:8,
        imgurl:'../img/cai/huanggua.jpg',
      },
      {
        name:'酸辣海带丝',
        price:7,
        imgurl:'../img/cai/haidaisi.jpg',
      },
      {
        name:'凉拌秋葵',
        price:10,
        imgurl:'../img/cai/qiukui.jpg',
      }
    ]
  },
  {
    title:"来点'辣的'",
    caiping:[
      {
        name:'小炒黄牛肉',
        price:30,
        imgurl:'../img/cai/niurou.jpg',
      },
      {
        name:'四川冒菜',
        price:25,
        imgurl:'../img/cai/maicai.jpg',
      },
      {
        name:'辣椒炒肉',
        price:25,
        imgurl:'../img/cai/lajiao.jpg',
      },
      {
        name:'藜蒿炒腊肉',
        price:25,
        imgurl:'../img/cai/lihao.jpg',
      },
      {
        name:'红烧豆腐',
        price:18,
        imgurl:'../img/cai/doufu.jpg',
      }
    ]
  },
  {
    title:"来点'甜的'",
    caiping:[
      {
        name:'蜜汁地瓜',
        price:30,
        imgurl:'../img/cai/digua.jpg',
      },
      {
        name:'豌豆炒玉米',
        price:25,
        imgurl:'../img/cai/yumi.jpg',
      },
      {
        name:'油炸红薯',
        price:25,
        imgurl:'../img/cai/hongshu.jpg',
      },
    ]
  },
  {
    title:"来点'汤的'",
    caiping:[
      {
        name:'玉米炖排骨汤',
        price:25,
        imgurl:'../img/cai/yumidunpaigu.jpg',
      },
      {
        name:'猴头菇汤',
        price:25,
        imgurl:'../img/cai/houtougu.jpg',
      },
      {
        name:'当归羊肉汤',
        price:25,
        imgurl:'../img/cai/yangrou.jpg',
      },
      {
        name:'酒糟鸡蛋汤',
        price:25,
        imgurl:'../img/cai/jiuzao.jpg',
      },
      {
        name:'鲫鱼汤',
        price:25,
        imgurl:'../img/cai/jiyu.jpg',
      },
      {
        name:'老母鸡汤',
        price:25,
        imgurl:'../img/cai/muji.jpg',
      },
    ]
  },
  {
    title:"来点主食",
    caiping:[
      {
        name:'一碗米饭',
        price:25,
        imgurl:'../img/cai/mifan1.jpg',
      },
      {
        name:'大桶米饭',
        price:25,
        imgurl:'../img/cai/mifan2.jpg',
      },
      {
        name:'香菇鸡蛋面',
        price:25,
        imgurl:'../img/cai/mian.jpg',
      },
    ]
  },
]
var shopping_list = [
];

// 购物车点击事件
function watchyidian(){
  // console.log($('.fixedone')[0]);
  // console.log($('.watch')[0]);
  $('.watch').removeClass('isnone');
}

// 点菜
function diancan(name,price){
  // console.log(name,price);
  shopping_list.push({
    name:name,
    price:price,
  })
  // console.log(shopping_list);
  alert('添加成功');
  xuanran();
}

// 退出
function back(){
  $('.watch').addClass('isnone');
}

// 渲染
function xuanran(){
  let totalprice = 0;
  for(var i=0;i<shopping_list.length;i++)
  {
    totalprice = totalprice+shopping_list[i].price;
  }
  // console.log(totalprice);
  var shopping = $('.list')[0];
  var shoppingtem = template('shoppingid',{
    shopping_list,totalprice,
  });
  shopping.innerHTML = shoppingtem;  
}

// 删除
function delecai(name){
  // console.log(name);
  shopping_list.forEach(function(ele,index){
    if(ele.name==name){
      shopping_list.splice(index,1);
      alert('删除成功');
    }
  })
  // console.log(shopping_list);
  xuanran();
}
// 提交订单
function submit(){
  // console.log(shopping_list);
  if(shopping_list.length==0){
    alert('请先点单');
    back();
  }
    else{
    var name = prompt('请输入你的姓名');
    var fang = prompt('请输入你的房号');
    var id = prompt('请输入你的点餐id');
    var time = prompt('请输入送餐日期和时间');
    if(name!=null && fang!=null && id!=null &&time!=null)
    {
      alert('提交成功');
      shopping_list=[];
      back();
      xuanran();
    }
    else alert('请完善你的送餐信息');    
  }
}


var bodymanu = $('.bodymanu')[0];
// console.log(bodymanu);
var bodymanutem = template('manuid',{
  caiping
});
bodymanu.innerHTML = bodymanutem