/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-07 22:09:53
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-21 11:21:25
 * @FilePath: \MINIBBS_REACT\src\layouts\index.tsx
 * @Description: 全局样式
 */
import { ComponentProps, ModelDvaState } from '@/interface';
import { useEffect } from 'react';
import { connect, Link, Outlet } from 'umi';
import styles from './index.less';

type Props = PageStateToPrps & ComponentProps & {}

const Layout = (props: Props) => {
  const { user, dispatch } = props
  useEffect(() => {
    fetchUserDetail()
  }, [])
  // useEffect(() => {
  //   const link = document.createElement('link');
  //   link.href = '/src/styles/tailwind.css';
  //   link.type = 'text/css';
  //   link.rel = 'stylesheet';
  //   document.head.appendChild(link);
  // }, []);


  // 获取用户详情
  const fetchUserDetail = async () => {
    dispatch({
      type: 'common/fetchLogin',
      payload: {}
    })
  }

  return (
    <div className={styles.navs}>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul> */}
      <Outlet />
    </div>
  );
}

const mapStateToProps = (modelState: ModelDvaState) => {
  const { common } = modelState
  return {
    user: common.user
  }
}

type PageStateToPrps = ReturnType<typeof mapStateToProps>

export default connect()(Layout)
