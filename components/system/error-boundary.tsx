"use client"

import {
  Component,
  ErrorInfo,
  ReactNode
} from "react"

interface Props{
  children:ReactNode
}

interface State{
  hasError:boolean
}

export class ErrorBoundary
extends Component<Props,State>{

  constructor(props:Props){

    super(props)

    this.state={
      hasError:false
    }
  }

  static getDerivedStateFromError(){

    return{
      hasError:true
    }
  }

  componentDidCatch(
    error:Error,
    errorInfo:ErrorInfo
  ){

    console.error(
      error,
      errorInfo
    )
  }

  render(){

    if(this.state.hasError){

      return(

        <div className="flex min-h-screen items-center justify-center bg-[#050816] p-6 text-white">

          <div className="max-w-xl rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center">

            <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Infrastructure Recovery
            </div>

            <div className="mt-4 text-4xl font-semibold tracking-tight">
              Coordination Recovery Active
            </div>

            <div className="mt-5 leading-relaxed text-zinc-400">
              AXON402 detected an infrastructure rendering anomaly.
              Recovery systems have isolated the execution environment.
            </div>

            <button
              onClick={()=>
                location.reload()
              }
              className="mt-8 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
            >
              Restore Infrastructure
            </button>

          </div>

        </div>

      )
    }

    return this.props.children
  }
}
