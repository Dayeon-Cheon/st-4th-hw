import { Link } from "react-router-dom";

export default function Home() {
  // Home 컴포넌트는 <Link> 컴포넌트를 사용해서 Detail 컴포넌트로 이동하도록 하세요.
  return (
    <>
      <div>Home</div>
      <div>
        <ul>
          <li>
            <Link to="./detail/:id">디테일 페이지</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
