import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

let OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GithubApiService {

    getUserInfo(userName: string, cb:(user: User) => any){
        request.get('https://api.github.com/users/' + userName ,OPTIONS, (error: any,response: any,body: any) =>{
            //console.log("response = "+ response);
            //console.log("body = "+ body);
            //console.log("error = "+ error);
            let user =  new User(body);
           // console.log("user object = "+user);
           // console.log("username = "+user.fullName);
            cb(user); //callback func
        })
    }
    
    getRepos (userName: string, cb:(repos: Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName +"/repos" ,OPTIONS, (error: any,response: any,body: any) =>{
           // let repoArray =  body;
           let repos =  body.map((repo:any) => new Repo(repo) )
           cb(repos);
        })
    }
}