import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input plceholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>ああああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
        <ul>
          <div className="list-row">
            <li>いいいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          <div className="list-row">
            <li>ううううう</li>
            <button>戻す</button>
          </div>
        </ul>
        <ul>
          <div className="list-row">
            <li>ええええええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
