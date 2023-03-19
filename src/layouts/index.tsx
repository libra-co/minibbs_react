/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-07 22:09:53
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-19 13:14:47
 * @FilePath: \MINIBBS_REACT\src\layouts\index.tsx
 * @Description: 全局样式
 */
import { ComponentProps, ModelDvaState } from '@/interface';
import { useEffect } from 'react';
import { connect, Link, Outlet } from 'umi';
import styles from './index.less';

type Props = PageStateToPrps & ComponentProps & {}

const Layout = (props: Props) => {
  useEffect(() => {
    fetchUserDetail()
  }, [])
  const { user, dispatch } = props

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
