import { Octokit, App } from "octokit";

const octokit = new Octokit({
    auth: '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'
  })

// await octokit.request('GET /search/repositories', {})

export async function findRepo(title){
    try {
        //응답 성공
        let result = await octokit.request('GET /search/repositories?' + `q=tetris${title}+&sort=stars&order=desc`, {})

        console.log(result);
        // const response = await axios.get('https://api.github.com/user',config);
        // alert(response.status);
        if (result.status == 200) {
            return result.data.items;
        } else {
            alert('ERROR: ' + result.status);
        }
    } catch (error) {
        //응답 실패
        alert('ERROR: ' + error.status);
        return;
    }
}
