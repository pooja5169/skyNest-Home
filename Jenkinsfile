pipeline {

    agent any

    stages {

        stage('Verify') {
            steps {
                sh 'ls -l'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                scp -r * root@3.110.207.153:/website/
                '''
            }
        }

    }

}