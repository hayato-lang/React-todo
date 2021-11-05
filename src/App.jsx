import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input plceholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div>
        <ul>
          <div>
            <li>ああああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
        <ul>
          <div>
            <li>いいいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      <div>
        <ul>
          <div>
            <li>ううううう</li>
            <button>戻す</button>
          </div>
        </ul>
        <ul>
          <div>
            <li>ええええええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
