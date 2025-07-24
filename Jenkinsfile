pipeline{
    agent any

    environment {

    }

    stages{
        stage ('checkout'){
            steps{
                git url: 'file:///e:All-Projects-Here/COMPLETED PROJECTS/Mean backend with node js (p1)/Health-app', branch: 'main'
            }
        }

        stage('build'){
            steps{
                bat 'docker-compose build'
            }
        }
    }
}