"use client"

import { useState } from "react"

import { AppShell } from "@/components/layout/app-shell"
import { ClientSafe } from "@/components/system/client-safe"
import { FadeIn } from "@/components/motion/fade-in"
import { Topbar } from "@/components/layout/topbar"
import { GridLayout } from "@/components/layout/grid-layout"
import { Sidebar } from "@/components/layout/sidebar"
import { PanelWrapper } from "@/components/panels/panel-wrapper"

import { MetricCard } from "@/components/dashboard/metric-card"
import { StatusBanner } from "@/components/infrastructure/status-banner"
import { LedgerEntry } from "@/components/ledger/ledger-entry"
import { RealtimeLedger } from "@/components/ledger/realtime-ledger"
import { WalletPanel } from "@/components/wallets/wallet-panel"
import { WalletConnectPanel } from "@/components/wallets/wallet-connect"
import { ActivityFeed } from "@/components/observability/activity-feed"
import { IdentityOrchestration } from "@/components/wallets/identity-orchestration"
import { SecurityPosture } from "@/components/security/security-posture"
import { EmbeddedWalletVault } from "@/components/turnkey/embedded-wallet-vault"
import { DelegatedSigning } from "@/components/turnkey/delegated-signing"
import { NetworkTopology } from "@/components/topology/network-topology"
import { SystemHealth } from "@/components/observability/system-health"
import { ExecutionTimeline } from "@/components/observability/execution-timeline"
import { ExecutionConsole } from "@/components/execution/execution-console"
import { ExecutionAction } from "@/components/execution/execution-action"
import { ExecuteTransaction } from "@/components/execution/execute-transaction"
import { FeedbackExecution } from "@/components/feedback/feedback-execution"
import { ReceiptGenerator } from "@/components/execution/receipt-generator"
import { OperationalPulse } from "@/components/intelligence/operational-pulse"
import { IntelligenceStream } from "@/components/intelligence/intelligence-stream"
import { LiveInfrastructureStream } from "@/components/intelligence/live-stream"
import { NotificationCenter } from "@/components/notifications/notification-center"
import { PolicyEngine } from "@/components/settings/policy-engine"
import { SettingsControl } from "@/components/settings/settings-control"
import { RecoveryVault } from "@/components/security/recovery-vault"
import { SecurityScore } from "@/components/security/security-score"
import { OnboardingFlow } from "@/components/onboarding/onboarding-flow"
import { ArcInfrastructure } from "@/components/ecosystem/arc-infrastructure"
import { TurnkeyInfrastructure } from "@/components/ecosystem/turnkey-infrastructure"
import { BuilderProfile } from "@/components/infrastructure/builder-profile"
import { BrandSystem } from "@/components/infrastructure/brand-system"
import { ResourceCenter } from "@/components/ecosystem/resource-center"
import { IdentityPanel } from "@/components/auth/identity-panel"

export default function HomePage() {

  const [active,setActive] =
  useState("overview")

  return (
    <ClientSafe>

    <AppShell>

      <Topbar />

      <FadeIn>

      <GridLayout>

        <Sidebar
          active={active}
          setActive={setActive}
        />

        <div className="space-y-6">

          {active === "overview" && (

            <>
              <StatusBanner />

              <ArcInfrastructure />

              <TurnkeyInfrastructure />

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

                <MetricCard
                  label="Execution Throughput"
                  value="1,284"
                />

                <MetricCard
                  label="Settlement Volume"
                  value="42,800 USDC"
                />

                <MetricCard
                  label="Latency"
                  value="84ms"
                />

                <MetricCard
                  label="Infrastructure Health"
                  value="99.98%"
                />

              </div>

              
<OperationalPulse />

              <div className="flex justify-end">
                <ExecutionAction />
              </div>

              <ExecuteTransaction />

              <ExecutionConsole />

              <NetworkTopology />

              <IntelligenceStream />

              <LiveInfrastructureStream />

              <IdentityPanel />

              <BuilderProfile />

              <ResourceCenter />

              <FeedbackExecution />

              <ReceiptGenerator />


              
<div className="grid gap-6 xl:grid-cols-2">
                <SystemHealth />
                <ExecutionTimeline />
              </div>

              <PanelWrapper
                title="Autonomous Coordination"
                description="Programmable execution infrastructure built on Arc."
              >
                <ActivityFeed />
              </PanelWrapper>
            </>

          )}

          {active === "ledger" && (

            <div className="space-y-6">

              <RealtimeLedger />

              <PanelWrapper
                title="Infrastructure Settlement Records"
                description="Immutable execution coordination history."
              >

                <div className="space-y-4">

                  <LedgerEntry
                    hash="0x32c59bb4c662519140040cd69ab2e4e2b055b48afa97bf..."
                    status="Finalized"
                  />

                  <LedgerEntry
                    hash="0x8fca14aa55bc821dca4400baaf991cc772..."
                    status="Confirmed"
                  />

                </div>

              </PanelWrapper>

            </div>

          )}

          {active === "wallets" && (

            <PanelWrapper
              title="Wallet Infrastructure"
              description="Embedded wallet coordination and identity systems."
            >
              
<div className="space-y-6">
                <WalletConnectPanel />

                <WalletPanel />
                <IdentityOrchestration />
                <SecurityPosture />

                <EmbeddedWalletVault />

                <DelegatedSigning />
              </div>

            </PanelWrapper>

          )}

          {active === "observability" && (

            <PanelWrapper
              title="Observability Layer"
              description="Realtime infrastructure visibility and operational monitoring."
            >
              <ActivityFeed />
            </PanelWrapper>

          )}

          {active === "notifications" && (

            <NotificationCenter />

          )}

          {active === "settings" && (

            <div className="space-y-6">

              <PolicyEngine />

              <SettingsControl />

            </div>

          )}

          {active === "security" && (

            <div className="space-y-6">

              <SecurityScore />

              <RecoveryVault />

            </div>

          )}

          {active !== "overview" &&
           active !== "ledger" &&
           active !== "wallets" &&
           active !== "observability" &&
           active !== "notifications" &&
           active !== "settings" &&
           active !== "security" && (

            <PanelWrapper
              title={active}
              description="Infrastructure coordination module."
            >

              <div className="text-zinc-400">
                Module operational.
              </div>

            </PanelWrapper>

          )}

        </div>

      </GridLayout>

      </FadeIn>

    </AppShell>

    </ClientSafe>
  )
}
