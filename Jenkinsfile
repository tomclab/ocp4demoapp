// Default Jenkins file, only check Java and Maven version
pipeline {
  agent any
  stages {
    stage('SCM') {
      steps {
        sh 'java -version'
        sh 'mvn --version'
        sh 'docker version'
      }
    }
    
  }
  environment {
    Img_Space = 'default'
    App_Name = 'demoapp'
  }
}
