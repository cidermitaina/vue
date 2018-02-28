Vue.component('accordion', {
  template: `<div class="accordion">
      <div class="header">
        HINT<i class="fa fa-2x fa-angle-down header-icon"></i>
      </div>
      <div class="body">
        <div class="body-inner">
          test<br>test
        </div>
      </div>
     </div>`
});

new Vue({
    el: '#app'
});
