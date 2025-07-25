pipeline{
    agent any

    stages{
        stage ('checkout'){
            steps{
               git url: 'file:///E:/All-Projects-Here/COMPLETED-PROJECTS/Mean-backend-with-nodejs/Health-app', branch: 'main'
            }
        }

        stage('build'){
            steps{
                bat 'docker-compose build'
            }
        }
    }
}