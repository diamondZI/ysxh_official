interface link{
  url:string,
  name:string,
  child?:link[]
}

export const Linklist:link[] = ([
{
  name:'网站首页',
  url:'',
  
},  
{
  name:'协会概况',
  url:'',
  child:[{
  name:'协会概况',
  url:'',
},{
  name:'协会概况',
  url:'',
},{
  name:'协会概况',
  url:'',
},{
  name:'协会概况',
  url:'',
},{
  name:'协会概况',
  url:'',
},]
},
{
  name:'党建工作',
  url:''
},
{
  name:'分支机构',
  url:''
},
{
  name:'学术研究',
  url:''
},
{
  name:'民乐考级',
  url:''
},
{
  name:'艺术展演',
  url:''
},
{
  name:'研修报名',
  url:''
},


])
