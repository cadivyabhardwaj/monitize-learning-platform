import { LearningModule } from './types';
import { pfBasicsModule } from './modules/pf-basics';
import { taxFundamentalsModule } from './modules/tax-fundamentals';
import { bankingAwarenessModule } from './modules/banking-awareness';
import { marketInvestingBasicsModule } from './modules/market-investing-basics';
import { businessMsmeLogicModule } from './modules/business-msme-logic';
import { documentLiteracyModule } from './modules/document-literacy';
import { bankingUpiMechanicsModule } from './modules/banking-upi-mechanics';
import { taxNoticesLiteracyModule } from './modules/tax-notices-literacy';
import { creditScoringLogicModule } from './modules/credit-scoring-logic';
import { insuranceRiskPoolingModule } from './modules/insurance-risk-pooling';
import { retirementLogicModule } from './modules/retirement-logic';
import { gstProfessionalsModule } from './modules/gst-professionals';
import { fraudScamAwarenessModule } from './modules/fraud-scam-awareness';
import { nriFinancialFrameworkModule } from './modules/nri-financial-framework';
import { hufLegalIdentityModule } from './modules/huf-legal-identity';
import { estatePlanningModule } from './modules/estate-planning';
import { mutualFundMechanicsModule } from './modules/mutual-fund-mechanics';
import { realEstateFrameworkModule } from './modules/real-estate-framework';
import { goldCommoditiesFrameworkModule } from './modules/gold-commodities-framework';
import { cryptoDigitalAssetsModule } from './modules/crypto-digital-assets';
import { startupCompensationModule } from './modules/startup-compensation';
import { corporateFinanceLogicModule } from './modules/corporate-finance-logic';
import { budgetSurplusFlowModule } from './modules/budget-surplus-flow';
import { derivativeLogicModule } from './modules/derivative-logic';
import { scheduleIIIPnLModule } from './modules/schedule-iii-pnl';
import { scheduleIIIBalanceSheetModule } from './modules/schedule-iii-balance-sheet';
import { scheduleIIICashFlowModule } from './modules/schedule-iii-cash-flow';
import { scheduleIIIAuditModule } from './modules/schedule-iii-audit';
import { auditRedFlagsModule } from './modules/audit-red-flags';
import { internalControlBasicsModule } from './modules/internal-control-basics';

/**
 * MONITIZE MODULE REGISTRY - ARCHITECTURAL INDEX
 * Separating content from code for scalability and performance.
 */
export const MODULE_REGISTRY: LearningModule[] = [
  // Deep-implemented production modules
  bankingAwarenessModule,
  pfBasicsModule,
  taxFundamentalsModule,
  marketInvestingBasicsModule,
  businessMsmeLogicModule,
  internalControlBasicsModule, // Registered New Module
  documentLiteracyModule,
  bankingUpiMechanicsModule,
  taxNoticesLiteracyModule,
  creditScoringLogicModule,
  insuranceRiskPoolingModule,
  retirementLogicModule,
  gstProfessionalsModule,
  fraudScamAwarenessModule,
  nriFinancialFrameworkModule,
  hufLegalIdentityModule,
  estatePlanningModule,
  mutualFundMechanicsModule,
  realEstateFrameworkModule,
  goldCommoditiesFrameworkModule,
  cryptoDigitalAssetsModule,
  startupCompensationModule,
  corporateFinanceLogicModule,
  budgetSurplusFlowModule,
  derivativeLogicModule,

  // Corporate Reporting Suite (Schedule III & Statutory Logic)
  scheduleIIIPnLModule,
  scheduleIIIBalanceSheetModule,
  scheduleIIICashFlowModule,
  scheduleIIIAuditModule,

  // Risk & Audit Literacy
  auditRedFlagsModule
];