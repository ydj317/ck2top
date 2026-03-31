$(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();

        if (top > 10) {
            $('.header').addClass("active");
        } else {
            $('.header').removeClass("active");
        }
    })
});



function counter(text, length){
    var limit = length;
    var str = text.value.length;
    if(str>limit){
        document.getElementById("reCount").innerHTML = "200자 이상 입력했습니다";
        text.value=text.value.substring(0,limit);
        document.getElementById("reCount").style.color = "#D10000";
        text.focus();
    }else if(str<limit){
        document.getElementById("reCount").style.color = "#d9d9d9";
    }
    document.getElementById("reCount").innerHTML = text.value.length + " / " + limit;
}

function contactWrap(){
    document.getElementById('modal-wrap').classList.add('active');
};

function modalClose(){
    document.getElementById('modal-wrap').classList.remove('active');
}

// 로딩
var loading_action;
function loadingPage(show) {
    if (show == 'show') {
        $("#loadImg").show();
        $(".loadBack").show();

        var strPosition = 0;
        loading_action = setInterval(function() {
            $("#loadImg").css("background-position", strPosition + 'px 0px');
            strPosition = strPosition - 50;
            if (strPosition == -350) {
                strPosition = 0;
            }
        }, 150);

    } else {
        $("#loadImg").hide();
        $(".loadBack").hide();

        clearInterval(loading_action);
    }
}

// 문의내용 제출
function goWriteInquiry() {
    
    // const inputList = document.querySelectorAll('.valiList');
    // inputList.forEach(element => {
    //     if(element.value == ''){
    //         element.style.borderColor = '#D10000';
    //     }else{
    //         element.style.borderColor = 'transparent';
    //     }
    // });
    
    var data                = new Object;

    // 이름
    var customerName = $('#customerName').val();
    if( !customerName ) {
        alert('姓名');
        $('#customerName').focus();
        return false;
    }
    data['customerName']    = customerName;

    // 전화번호
    var phone = $('#phone').val();
    if( !phone ) {
        alert('联系电话');
        $('#phone').focus();
        return false;
    }
    data['phone']    = phone;

    // 회사명
    var customerCompany = $('#customerCompany').val();
    if( !customerCompany ) {
        alert('公司名');
        $('#customerCompany').focus();
        return false;
    }
    data['customerCompany']    = customerCompany;

    // 이메일
    var customerEmail = $('#customerEmail').val();
    if( !customerEmail ) {
        alert('电子邮箱');
        $('#customerEmail').focus();
        return false;
    }
    data['customerEmail']    = customerEmail;

    // 제목
    var inquiryTitle = $('#inquiryTitle').val();
    if( !inquiryTitle ) {
        alert('产品类目');
        $('#inquiryTitle').focus();
        return false;
    }
    data['inquiryTitle']    = inquiryTitle;

    // 설명
    var inquiryText = $('#inquiryText').val();
    if( !inquiryText ) {
        alert('简单说明');
        $('#inquiryText').focus();
        return false;
    }
    data['inquiryText']    = inquiryText;
    
     // 로딩
    loadingPage('show');

    $.ajax({
        url			: './json.php?act=goWriteInquiry',
        data        : data,
        type		: 'post',
        dataType	: 'json',
        success		: function(result) {
        
            alert(result.msg);
            loadingPage('');
            
            location.reload();
            return;
            
        }
    });

}