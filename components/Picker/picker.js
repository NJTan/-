Component({
    options:{
        multipleSolt:true//多solt支持
    },


   properties:{
    cancel:{
       type:String,
       value:"取消"
    },
    confirm:{
        type:String,
        value:"确定"
    },
 },
    data:{
        isShow:false,
        items: [
            {name: 'USA', value: '美国'},
            {name: 'CHN', value: '中国', checked: 'true'},
            {name: 'BRA', value: '巴西'},
            {name: 'JPN', value: '日本'},
            {name: 'ENG', value: '英国'},
            {name: 'TUR', value: '法国'},
        ],
    },
    
    methods:{
        radioChange: function(e) {
            console.log('radio发生change事件，携带value值为：', e.detail.value)
        },
        hidePicker(){
            this.setData({  
              isShow:!this.data.isShow,
              })

        },
        showPicker(){
            this.setData({  isShow:!this.data.isShow,
            })
        },
        _cancelEvent(){
            //触发取消回调
            this.triggerEvent("cancelEvent")
        },
        _confirmEvent(){
            //触发成功回调
            this.triggerEvent("confirmEvent");
        },

    },

  
})