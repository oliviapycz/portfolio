<template lang="html">
  <div id="competences">
    <div class="col-md-9 row" style="margin-top:20px">
      <div class="col-md-6 offset-md-3 row">
        <h2 class="col-md-12" style="color: white">Compétences</h2>
      </div>
      <div class="row col-md-10 offset-1" style="margin-top: 20px">
        <div class="col-md-3">
          <p>HMTL/CSS</p>
        </div>
        <div class="progress col-md-8">
          <div class="progress-bar progress-bar-striped" role="progressbar" style="max-width: 85%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span class="title">85%</span></div>
        </div>
        <div class="col-md-3">
          <p>JS</p>
        </div>
        <div class="progress col-md-8">
          <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="max-width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span class="title">70%</span></div>
        </div>
        <div class="col-md-3">
          <p>VueJS</p>
        </div>
        <div class="progress col-md-8">
          <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="max-width: 65%" aria-valuenow="50" value="0"  max="60"><span class="title">65%</span></div>
        </div>
        <div class="col-md-3">
          <p>MySQL</p>
        </div>
        <div class="progress col-md-8">
          <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="max-width: 75%" aria-valuenow="75" value="0"  max="80"><span class="title">75%</span></div>
        </div>
        <div class="col-md-3">
          <p>NodeJS</p>
        </div>
        <div class="progress col-md-8">
          <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="max-width: 45%" aria-valuenow="100" value="0"  max="100"><span class="title">45%</span></div>
        </div>
        <div class="col-md-3">
          <p>GraphQL</p>
        </div>
        <div class="progress col-md-8">
          <div class="progress-bar progress-bar-striped" role="progressbar" style="max-width: 20%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span class="title">20%</span></div>
        </div>

        <div class="row offset-md-1 circle-competence" style="margin-top: 20px">
          <div class="col-md-3">
            <div class="progress-circle blue">
                <span class="progress-left">
                    <span class="progress-circle-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-circle-bar"></span>
                </span>
                <div class="progress-value">90%</div>
            </div>
            <div class="col-md-12">
              <p>Agile</p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="progress-circle brown">
                <span class="progress-left">
                    <span class="progress-circle-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-circle-bar"></span>
                </span>
                <div class="progress-value">75%</div>
            </div>
            <div class="col-md-12">
              <p>Github</p>
            </div>
        </div>

          <div class="col-md-3">
          <div class="progress-circle green">
              <span class="progress-left">
                  <span class="progress-circle-bar"></span>
              </span>
              <span class="progress-right">
                  <span class="progress-circle-bar"></span>
              </span>
              <div class="progress-value">60%</div>
          </div>
          <div class="col-md-12">
            <p>UML</p>
          </div>
        </div>

          <div class="col-md-3">
          <div class="progress-circle orange">
              <span class="progress-left">
                  <span class="progress-circle-bar"></span>
              </span>
              <span class="progress-right">
                  <span class="progress-circle-bar"></span>
              </span>
              <div class="progress-value">100%</div>
          </div>
          <div class="col-md-12">
            <p>Google Search</p>
          </div>
      </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
#competences {
  background-color: rgba(232, 220, 0, 0.8);
  height: 90vh;
  width: 100vw;
}
.progress-bar {
  width: 0;
  animation: progress 2.5s ease-in-out forwards;

  .title {
    opacity: 0;
    animation: show 0.35s forwards ease-in-out 0.5s;
  }
}
#competences p {
  color: green;
}
#competences span {
  font-size: 14px;
}
.circle-competence p {
  margin-top: 4px;
}
@keyframes progress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes show  {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.progress-circle {
    width: 150px;
    height: 150px;
    line-height: 150px;
    background: none;
    margin: 0 auto;
    box-shadow: none;
    position: relative;
}
.progress-circle:after{
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #fff;
    position: absolute;
    top: 0;
    left: 0;
}
.progress-circle > span{
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1;
}
.progress-circle .progress-left{
    left: 0;
}
.progress-circle .progress-circle-bar{
    width: 100%;
    height: 100%;
    background: none;
    border-width: 2px;
    border-style: solid;
    position: absolute;
    top: 0;
}
.progress-circle .progress-left .progress-circle-bar{
    left: 100%;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left;
}
.progress-circle .progress-right{
    right: 0;
}
.progress-circle .progress-right .progress-circle-bar{
    left: -100%;
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
    border-right: 0;
    -webkit-transform-origin: center right;
    transform-origin: center right;
    animation: loading-1 1.8s linear forwards;
}
.progress-circle .progress-value{
    width: 85%;
    height: 85%;
    border-radius: 50%;
    border: 2px solid #ebebeb;
    font-size: 32px;
    line-height: 125px;
    text-align: center;
    position: absolute;
    top: 7.5%;
    left: 7.5%;
}
.progress-circle.blue .progress-circle-bar{
    border-color: #049dff;
}
.progress-circle.blue .progress-value{
    color: #049dff;
}
.progress-circle.blue .progress-left .progress-circle-bar{
    animation: loading-2 0.4s linear forwards 1.8s;
}
.progress-circle.brown .progress-circle-bar{
    border-color: brown;
}
.progress-circle.brown .progress-value{
    color: brown;
}
.progress-circle.brown .progress-left .progress-circle-bar{
    animation: loading-3 1s linear forwards 1.8s;
}
.progress-circle.orange .progress-circle-bar{
    border-color: #FF530D;
}
.progress-circle.orange .progress-value{
    color: #FF530D;
}
.progress-circle.orange .progress-left .progress-circle-bar{
    animation: loading-4 0.4s linear forwards 1.8s;
}
.progress-circle.green .progress-circle-bar{
    border-color: #1abc9c;
}
.progress-circle.green .progress-value{
    color: #1abc9c;
}
.progress-circle.green .progress-left .progress-circle-bar{
    animation: loading-5 1.2s linear forwards 1.8s;
}
@keyframes loading-1{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
}
@keyframes loading-2{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(144deg);
        transform: rotate(144deg);
    }
}
@keyframes loading-3{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }
}
@keyframes loading-4{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
}
@keyframes loading-5{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(36deg);
        transform: rotate(36deg);
    }
}
</style>
