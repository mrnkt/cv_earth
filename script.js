var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  $(document).ready(function(){
    $("#softskills").click(function(){
      $("#carouselExampleDark,#supercontainerdiplomes,#supercontainerexppro").hide();
      $("#supercontainersoftskills").show();
    });
  });

  $(document).ready(function(){
    $("#fermersoftskills,#fermersoftskills2,#fermersoftskills3").click(function(){
      $("#supercontainersoftskills,#supercontainerdiplomes").hide();
      $("#carouselExampleDark").show();
    });
  });

  $(document).ready(function(){
    $("#diplomes").click(function(){
      $("#carouselExampleDark,#supercontainersoftskills,#supercontainerexppro").hide();
      $("#supercontainerdiplomes").show();
    });
  });

  $(document).ready(function(){
    $("#fermerdiplomes,#fermerdiplomes2,#fermerdiplomes3").click(function(){
      $("#supercontainersoftskills,#supercontainerdiplomes").hide();
      $("#carouselExampleDark").show();
    });
  });

  $(document).ready(function(){
    $("#exppro").click(function(){
      $("#carouselExampleDark,#supercontainersoftskills,#supercontainerdiplomes").hide();
      $("#supercontainerexppro").show();
    });
  });

  $(document).ready(function(){
    $("#fermerdiplomes,#fermerdiplomes2,#fermerdiplomes3").click(function(){
      $("#supercontainersoftskills,#supercontainerdiplomes").hide();
      $("#carouselExampleDark").show();
    });
  });

//   document.querySelector("#softskills").addEventListener("click",function (){
//   document.querySelector("#supercontainer").style.display = "none";
//   });