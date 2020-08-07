const db = firebase.firestore();
const DOC_ID = "ufosociety_accesscount_db_id";
const countRef = db.collection("data").doc(DOC_ID);
let fetchedCount = 0;

// DOM操作定義
const displayCount = (count) => {
    const counter = document.getElementById('accessCounter');
    counter.innerHTML = count;

    // bugをはらんでいる
    message(count);
}

// アクセス時に値を更新してDOMを変更する
const updateDate = async (currentCount) => {
    const newCount = currentCount + 1;
    await countRef.update({
        count: newCount
    })
    .then(() => {
        displayCount(newCount);
    })
    .catch((error) => {
        throw new Error(error);
    });
}

// DBの値を取得-> update関数に渡す -> DOM操作実行
const listenData = async () => {
    const fetched = await countRef.get()
    .catch((error) => {
        console.log(error);
        throw new Error(error);
    });
    const fetchedCount = fetched.data().count;
    await updateDate(fetchedCount)
    .catch((error) => {
        throw new Error(error);
    });

    await db.app.delete()
    .catch((error) => {
        throw new Error(error);
    });
}

const message = (count) => {
    if ((count / 15) === 0) {
        console.log('DBに既にデータがあるときにしかちゃんと動かないの泣ける');
    }
};

// 実行
listenData();