import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import colors from '../colors'

const Wrapper = styled.div`
  background-color: #eee;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;

  .card-icon {
    display: flex;
    justify-content: center;

    &-wrapper {
      border: 2px solid ${colors.yellow};
      padding: 10px;
      border-radius: 100px;
      box-shadow: 1px 3px 8px -7px rgba(0,0,0,0.66);
      -webkit-box-shadow: 1px 3px 8px -7px rgba(0,0,0,0.66);
      -moz-box-shadow: 1px 3px 8px -7px rgba(0,0,0,0.66);
      height: 55px;
      width: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      color: ${colors.yellow};
      height: 30px;
      width: 30px;
    }
  }

  .card-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    /* border-bottom: 1px solid ${colors.yellow}; */
  }
`

type Props = {
  children: ReactNode
  title: string
  icon: IconProp
}

function HomeCard(props: Props) {
  const { children, title, icon } = props

  return (
    <Wrapper>
      <div className="card-icon">
        <div className="card-icon-wrapper">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <div className="card-title">{ title }</div>
      { children }
    </Wrapper>
  )
}

export default HomeCard