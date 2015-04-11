/**
 * User: g.gaokai@gmail.com
 * Date: 12-09-15
 * describe: track 入口
 */

KISSY.add(function(S, Control){
  var $ = S.all;
  //class
  /**
    * @param{config} 
    */
  function KSTrack(config){
    return new Control(config);
  }
  return KSTrack;
},{
  requires: ['./control']
});