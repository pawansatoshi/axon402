export interface EmbeddedWallet {

  walletId:string

  organizationId:string

  status:string

  createdAt:number
}

export async function initializeEmbeddedWallet(){

  await new Promise((resolve)=>
    setTimeout(resolve,1200)
  )

  return{
    walletId:
    "tk_embedded_ax402",

    organizationId:
    "ax402_org",

    status:
    "operational",

    createdAt:
    Date.now()
  }
}

export async function delegatedSigning(){

  await new Promise((resolve)=>
    setTimeout(resolve,900)
  )

  return{
    status:"verified"
  }
}

export async function synchronizeRecovery(){

  await new Promise((resolve)=>
    setTimeout(resolve,700)
  )

  return{
    status:"synchronized"
  }
}
