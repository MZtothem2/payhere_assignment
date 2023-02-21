const KEY = "GH_SAVED_REPOSITORY"

export const saveRepo = (repo) => {
    // 저장값 확인
    if (isSavedRepo(repo.id)) {
        return;
    }
    let savedArr = JSON.parse(localStorage.getItem(KEY))
    if(savedArr.length > 3){
        alert('저장 개수를 초과하였습니다')
        return;
    }
    
    savedArr.push(repo)
    
    localStorage.setItem(KEY, JSON.stringify(savedArr));
    console.log('saveRepo :: ' + localStorage.getItem(KEY))
}

export const deleteRepo = (repoId) => {
    let saved = JSON.parse(localStorage.getItem(KEY));
    console.log('deleteRepo :: ' + repoId)

    if(!saved || !Array.isArray(saved) || !isSavedRepo(repoId)) {
        return false;
    }

    let filtered = saved.filter( repo => repo.id != repoId);
    localStorage.setItem(KEY, JSON.stringify(filtered));

    console.log('deleteRepo :: ' + repoId + ',' + localStorage.getItem(KEY))
}

export const isSavedRepo = (repoId) => {
    if (!localStorage.getItem(KEY) || !Array.isArray(JSON.parse(localStorage.getItem(KEY)))) {
        localStorage.setItem(KEY, '[]');
    }
    let saved = JSON.parse(localStorage.getItem(KEY));
    console.log('isSavedRepo::', saved.findIndex( repo => repo.id == repoId))
    return saved.findIndex( repo => repo.id == repoId) > -1
}