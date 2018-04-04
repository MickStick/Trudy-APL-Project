<template>
   <div>

      <div class="container">
          <h3 class="center">Lambda Calculus</h3>

          <form class="container" action="">
              <h5 class="center">Enter Equation</h5>
              <div class="input-field">
                <textarea class="materialize-textarea" name="data" id="data"></textarea>
              </div>
          </form>
          <button class="btn green darken-2" id="btn" v-on:click="calculate">Submit</button>

          <div class="container">
              <br><label>Expression: <span id="expr"></span></label><br>
              <span>Formula: <br><pre id="formula"></pre></span><br>
              <label >Result: <span id="result"></span></label>
          </div>
      </div>

  </div>
</template>

<script>
  
export default {
  name: 'Lambda',
  data () {
    return {
    }
  },
  methods: {
      test: () => {
       document.getElementById("formula").innerHTML += "Test";
        alert(document.getElementById("data").value);
      },
      calculate:() => {
          let text = document.getElementById('data').value;
          let m = document.getElementById('data').value;
          let x = eval(m)+ "<br>";
          document.getElementById("result").innerHTML = x;

          document.getElementById("formula").innerHTML = "";
          let str = document.getElementById('data').value;
          let op1;
          if (str.includes("+")) {
              op1 = "Addition:   λm.λn.λf.λx m f(n f x) \n";
              document.getElementById("formula").innerHTML += op1;

          }

          
          if (str.includes("-")) {
              op1 = "Subtraction:   λm.λn.n pred m \n";

              document.getElementById("formula").innerHTML += op1;
          }

          if (str.includes("*")) {
              op1 = "Multiply:   λm.λn.λf.λx.m(n f)x \n";
              document.getElementById("formula").innerHTML += op1;
          }

          if (str.includes("/")) {
              op1 = "Division:  (λn.((λf.(λx.x x) (λx.f (x x))) (λc.λn.λm.λf.λx.(λd.(λn.n (λx.(λa.λb.b)) (λa.λb.a)) d ((λf.λx.x) f x) (f (c d m f x))) ((λm.λn.n (λn.λf.λx.n (λg.λh.h (g f)) (λu.x) (λu.u)) m) n m))) ((λn.λf.λx. f (n f x)) n)) \n";
              document.getElementById("formula").innerHTML += op1;
          }

          let find = ["1","2","3","4","5","6","7","8","9",'0','10'];
          let replace = ['λa','λb','λc','λd','λe','λf','λg','λh','λi','λj','λk'];

          for (let i = 0; i < find.length; i++) {
            text = text.replace(new RegExp(find[i], 'gi'), replace[i]);
            text = text.replace(/[-&\/\\#,+$~%.'":*?<>]/g,'.');
          }

          console.log(text);

          	 document.getElementById("expr").innerHTML = text;

          	 
      }
  }
}
</script>

