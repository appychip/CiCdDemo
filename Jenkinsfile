pipeline {

    agent any

    options {
        buildDiscarder logRotator( 
                    daysToKeepStr: '16', 
                    numToKeepStr: '10'
            )
    }

    stages {

        stage('Testing Feature Branch') {
            when {
                branch 'feature'
            }
            steps {
              cleanWs()
              git branch: 'feature', url:'https://github.com/VinayakSingoriya/multibranchPipelineTest.git'
              sh '''
              npm install
              npm test test.js
              '''
            }
        }
        
        stage('Deploy on Staging server') {
            when {
                branch 'develop'
            }
            steps {
                sshagent(['stage'])  {
                sh 'ssh -o StrictHostKeyChecking=no ubuntu@52.55.92.20 << EOF\n' +
                    'git clone -b develop https://github.com/VinayakSingoriya/multibranchPipelineTest.git app\n' +
                    'cd app\n' +
                    'npm install\n' +
                    'pm2 start "npm start"\n' +
                    'EOF'	
                }
            }
        }

        stage('Testing Develop') {
            when {
                branch 'develop'
            }
          steps {
                script{
                sleep 5
                def responseCode = sh(script: 'curl -I http://52.55.92.20:4000/', returnStdout: true).trim()
                 def responseCodeNumber = responseCode.substring(9, 12)
                    echo 'The response code is: ' + responseCodeNumber
                  if (responseCodeNumber == '200') {
                    echo 'The app is deployed'
                  } else {
                    error('App is not deployed')
                  }
            }
          }
        }
    

    }   
}
