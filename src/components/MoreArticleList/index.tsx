/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-25 18:08:37
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-26 15:18:20
 * @FilePath: \MINIBBS_REACT\src\components\MoreArticleList\index.tsx
 * @Description: moreArticleList
 */
import routers, { routeTemplate } from '@/utils/routers'
import { articleHomeArticle } from '@/utils/service/article'
import { List, Space } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { history } from 'umi'
import { ArticleHomeArticleListItem } from './const'
import './index.less'

const MoreArticleList = () => {
  const [moreArticleList, setMoreArticleList] = useState<ArticleHomeArticleListItem[]>([])
  useEffect(() => {
    getArticleList()
  }, [])

  const getArticleList = async () => {
    const query = {
      pageNum: 1,
      pageSize: 10,
    }
    try {
      const { result: { dataList }, status } = await articleHomeArticle(query)
      if (status === 200) {
        setMoreArticleList(dataList)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className='more-article-page'>
      <Space direction='vertical' className='article-row padding-0-8'>
        {
          moreArticleList.map((article, index) => {
            return <>
              <div key={article.aid}>{index + 1}. <a onClick={() => history.push(routeTemplate(routers.article, { aid: article.aid }))} >{article.title}</a> </div>
            </>
          })
        }
      </Space>
    </div>
  )
}

export default MoreArticleList