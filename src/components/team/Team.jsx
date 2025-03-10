import React from 'react'
import Back from '../common/back/Back'
import TeamCard from './TeamCard'
import "./team.css"

const Team = () => {
  return (
    <>
    <Back title="Team"/>
    <section className="team shadow">
      <div className="team">
        <div className="container grid">
          <TeamCard />
        </div>
      </div>
    </section>
    </>
  )
}

export default Team