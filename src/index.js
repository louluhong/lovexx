/**
 * @author {娄露红}({WB085725})
 * @version 0.0.1
 */
define(function (require) {

	function Mod() {
		this.init.apply(this, arguments);
	}

	Mod.prototype = {
		/**
		 * 入口
		 * @param dom 模块根节点
		 * @param conf 数据描述，为空说明已渲染
		 */
		init: function (container, conf) {
			var self = this;
			self._node = $(container);
			//self.error可用于记录模块的异常 并且在jstracker平台查看 self.error('api错误')
			//存在数据描述，异步渲染
			if (conf) {
				self.loadData(conf);
			} else {
				//为空 绑定事件
				self.bindEvent();
			}
			$('.by_love').hide();
			function xyx() {
			    this.ctimes = 0;
			    this.xxlen = 100;
			    this.seconds=0;
			    this.totalseconds=0;
			    this.init.apply(this,arguments);
			}

			xyx.prototype = {
			    setper:function(){
			      var self=this;
			      var per=self.ctimes/self.xxlen*100-100+"%";
			      $('.bgcolor_s').css('bottom',per);
			      $('.by_lang').css('bottom',self.ctimes/self.xxlen*100-21+"%");
			      if(parseInt(self.ctimes/self.xxlen*100)>=100){
			      	$('.by_text').hide();
			      	 $('.by_lang').hide();
			      	$('.by_text').html(parseInt(self.ctimes/self.xxlen*100)+'%');
			      	$('.bgcolor_s').css('bottom','0');
			      	$('.by_font3').show();
			      	$('.by_font2').hide();
			      	$('.by_font1').hide();
			      	$('.by_heat').show();
			      	$('.by_heat1').show();
			      	$('.by_love').addClass('heat');
			      	$('.by_bgcolor').addClass('heat');
			      	$('.bgcolor_s').addClass('heat');
			      }else{
			      	$('.by_text').html('+'+parseInt(self.ctimes/self.xxlen*100)+'%');
			      }
			      if(parseInt(self.ctimes/self.xxlen*100)>=1&&parseInt(self.ctimes/self.xxlen*100)<100){
			      	$('.by_font1').hide();
			      	$('.by_font2').show();
			      	
			      }
			    },
			    bindEvents: function() {
			      	var self=this;
			      	$('.love_out').on('touchend', function() {
			        	$('.love_out').css({'-webkit-transform':'scale(0.8)','opacity':'0'});
			        	return false;
			      	});
			      	
				    $('.love_out').on('touchstart', function() {
				    	console.log(parseInt(self.ctimes/self.xxlen*100))
				    	if(parseInt(self.ctimes/self.xxlen*100)>=100){
				    		return
				    	}else{
					        $('.love_out').css({'-webkit-transform':'scale(1.5)','opacity':'0.8'});
					        $('.by_love').show();
					        $('.by_shou').hide();
					        $('.bagin_img').hide();
					        if(self.ctimes<self.xxlen){
					        var num=Math.floor(Math.random()*2+1);
					        // console.log(num)
					          self.ctimes+=num;
					          self.setper();
					        }
					        $('.bigger').addClass('biggest');
					        var time = new Date().getTime();
					        $('.btn-round').prepend('<div class="bigger big_' + time + '"></div>');
					        setTimeout(function() {
					          $('.big_' + time).addClass('biggest');
					        }, 100);
					        setTimeout(function() {
					          $('.big_' + time).remove();
					        }, 2000);
						}
				    });
			    },
			    autoDecreate:function(){
			      var self=this;
			      var per=0;
			      if(per<=0){
			        self.timmer=setInterval(function(){
			          var per=self.ctimes/self.xxlen*100;
			          if(per>=0&&per<100){
			            self.seconds+=0.1;
			            self.ctimes-=0.1;
			            self.setper(); 
			            $('.console').html("您的用时"+parseInt(self.seconds*10)/10+"秒");
			          }
			          else if(per>=100){
			            self.totalseconds=self.seconds;
			            $('.console').html("您的用时"+parseInt(self.totalseconds*10)/10+"秒");
			            clearInterval(self.timmer);
			          }
			        },100);
			      }
			    },
			    init: function() {
			      this.bindEvents();
			      // this.autoDecreate();
			    }
			};
			new xyx();
		},
		//加载数据
		loadData: function (conf) {
			var self = this;
//            //XCtrl逻辑，参考文档：http://gitlab.alibaba-inc.com/tbc/market/blob/master/xctrl.md
//            XCtrl.dynamic(conf, "items", function (data) {
//                //数据处理，模板渲染
//                S.log(data);
//                //模板完绑定事件
//                self.bindEvent();
//            })
		},
		//事件绑定
		bindEvent: function () {

		}
	};

	return Mod;

});
