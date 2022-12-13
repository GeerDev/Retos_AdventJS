function getFilesToBackup(lastBackup, changes) {
    return [...new Set (changes.filter(element => element[1] > lastBackup).map(element => element[0]))].sort((a,b) => a - b)
  }