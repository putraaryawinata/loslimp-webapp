/*let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // A string or number determining how long the animation will run.
          duration: 4000,
          // A string indicating which easing function to use for the transition.
          easing: "swing",
          /**
           * A function to be called for each animated property of each animated element. 
           * This function provides an opportunity to
           *  modify the Tween object to change the value of the property before it is set.
           */
          /*step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  
  let a = 0;
  $(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });
  
  
  
  /**
   *
   *  sticky navigation
   *
   */
  
  /*let navbar = $(".navbar");
  
  $(window).scroll(function () {
    // get the complete hight of window
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  });*/

  var firebaseConfig = {
    apiKey: "AIzaSyCKZnVzo0weZiU0sg0SGUUBXi9kPK6wHPU",
    authDomain: "los-limp.firebaseapp.com",
    databaseURL: "https://los-limp-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "los-limp",
    storageBucket: "los-limp.appspot.com",
    messagingSenderId: "631510162625",
    appId: "1:631510162625:web:a595de3f6e1ddf3d5b0840",
    measurementId: "G-R08EGTSH7X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  var database = firebase.database();
  //Row 1
  var hasil_1_param = database.ref('hasil-1/parameter');
  hasil_1_param.on('value', gotDataParam1, errData);
  var hasil_1_dim = database.ref('hasil-1/dimensi');
  hasil_1_dim.on('value', gotDataDim1, errData);

  function gotDataParam1(data){
    console.log(data.val());
    var param = data.val();
    document.querySelector('#parameter-1').textContent = param;
  }

  function gotDataDim1(data){
    console.log(data.val());
    var dim = data.val();
    document.querySelector('#dimension-1').textContent = dim;
  }
  //Row 2
  var hasil_2_param = database.ref('hasil-2/parameter');
  hasil_2_param.on('value', gotDataParam2, errData);
  var hasil_2_dim = database.ref('hasil-2/dimensi');
  hasil_2_dim.on('value', gotDataDim2, errData);

  function gotDataParam2(data){
    console.log(data.val());
    var param = data.val();
    document.querySelector('#parameter-2').textContent = param;
  }

  function gotDataDim2(data){
    console.log(data.val());
    var dim = data.val();
    document.querySelector('#dimension-2').textContent = dim;
  }

  //Row 3
  var hasil_3_param = database.ref('hasil-3/parameter');
  hasil_3_param.on('value', gotDataParam3, errData);
  var hasil_3_dim = database.ref('hasil-3/dimensi');
  hasil_3_dim.on('value', gotDataDim3, errData);

  function gotDataParam3(data){
    console.log(data.val());
    var param = data.val();
    document.querySelector('#parameter-3').textContent = param;
  }

  function gotDataDim3(data){
    console.log(data.val());
    var dim = data.val();
    document.querySelector('#dimension-3').textContent = dim;
  }

  function errData(error){
    console.log('Error!');
    console.log(err)
  }

  var scroll = new SmoothScroll('a[href*="#"]');

  //Animation:
  
