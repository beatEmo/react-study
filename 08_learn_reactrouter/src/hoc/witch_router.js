import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams
} from "react-router-dom";

function withRouter(WrapperComponent) {
  return (props) => {
    // 1. 导航
    const navigate = useNavigate();

    // 2. 动态路由参数 /home/:id
    const params = useParams();

    // 3. 查询字符串参数 /home?name=xxx&age=xxx
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries(searchParams);

    const router = { navigate, params, location, query };

    return <WrapperComponent {...props} router={router} />;
  };
}

export default withRouter;
