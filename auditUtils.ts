import { AuditEntry, LabTool } from './types';

const AUDIT_LOG_KEY = 'monitize_audit_trail';

export const AuditService = {
  logAction: (
    actionType: AuditEntry['actionType'],
    contentSource: AuditEntry['contentSource'],
    metadata: { moduleId?: string; levelId?: number; toolId?: LabTool }
  ) => {
    const log: AuditEntry[] = JSON.parse(localStorage.getItem(AUDIT_LOG_KEY) || '[]');
    const newEntry: AuditEntry = {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      actionType,
      contentSource,
      ...metadata
    };
    log.push(newEntry);
    localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(log.slice(-1000)));
  },

  exportAuditTrail: () => {
    const log = localStorage.getItem(AUDIT_LOG_KEY) || '[]';
    const blob = new Blob([log], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `monitize_activity_log_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};