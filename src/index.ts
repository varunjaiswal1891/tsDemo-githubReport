//console.log("hello varun");

import {GithubApiService} from './GithubApiService'; 
import { Repo } from './Repo';
import { User } from './User';
import * as _ from 'lodash';

//npm init   --generate package.json structure
//tsc --init --generate tsconfig.json structure
//npm install request lodash --save 
//npm install @types/lodash @types/request --save-dev

let svc = new GithubApiService();
if(process.argv.length <3)
{
    console.log("please pass username as an argument");
}
else
{
    //username = varunjaiswal1891
  let username = process.argv[2];
  svc.getUserInfo(username,(user: User) => {
     svc.getRepos(username,(repos: Repo[]) => {

        let sortedRepos = _.sortBy(repos, [(repo:Repo) => repo.size * -1 ]); // multiply -1 to sort in desc order
        //let filteredRepos = _.take(sortedRepos,3);
        user.repos = sortedRepos;
        console.log("User = "+user.repoCount + ","+ user.fullName);   
        //console.log("repos ="+ user.repos);
        for(var i=0;i<user.repoCount;i++)
        {
            if(user.repos[i].url != null)
            {
                console.log("repo url ="+user.repos[i].url +", size = "+ user.repos[i].size);
            }
        }
       });
   
});

}
