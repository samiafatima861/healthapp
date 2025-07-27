// pipeline{
//     agent any

//     stages{
//          stage ('checkout'){
//             steps{
//             //    git url: 'file:///E:/All-Projects-Here/COMPLETED-PROJECTS/Mean-backend-with-nodejs/Health-app', branch: 'main'
//             git url: 'https://github.com/samiafatima861/healthapp.git', branch: 'main', credentialsId: 'github-pat'

//             }
//          }

//          stage('build'){
//             steps{
//                 bat 'docker-compose build'
//             }
//          }

//          stage('Tag Image'){
//             steps{
//                 bat 'docker tag health-app samiafatima/health-app:latest'
//             }
//          }

        

//         stage('Push Image') {
//             steps {
//                 script {
//                     withCredentials([usernamePassword(
//                         credentialsId: 'docker-hub-credentials', // your Jenkins credentials ID
//                         usernameVariable: 'DOCKER_USERNAME',
//                         passwordVariable: 'DOCKER_PASSWORD'
//                     )]) {
//                         // Login securely using password-stdin
//                         bat '''
//                         echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin
//                         '''
//                         // Push the image
//                         bat 'docker push samiafatima/health-app:latest'
//                         // Logout after push
//                         bat 'docker logout'
//                     }
//                 }
//            }
//         } 
//     }
// }
pipeline {
    agent any

    stages {
        stage('checkout') {
            steps {
                // Optional: Local file checkout (commented out)
                // git url: 'file:///E:/All-Projects-Here/COMPLETED-PROJECTS/Mean-backend-with-nodejs/Health-app', branch: 'main'
                git url: 'https://github.com/samiafatima861/healthapp.git', branch: 'main', credentialsId: 'github-pat'
            }
        }

        stage('build') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Tag Image') {
            steps {
                bat 'docker tag health-app samiafatima/health-app:latest'
            }
        }

        stage('Push Image') {
            steps {
                script {
                    withCredentials([usernamePassword(
                        credentialsId: 'docker-hub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )]) {
                        // Login securely using password-stdin
                        bat '''
                        echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin
                        '''
                        // Push the image
                        bat 'docker push samiafatima/health-app:latest'
                        // Logout after push
                        bat 'docker logout'
                    }
                }
            }
        }
    }
}
