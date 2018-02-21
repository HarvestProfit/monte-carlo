export const BEGIN_ANALYSIS = 'BEGIN_ANALYSIS';
export const END_ANALYSIS = 'END_ANALYSIS';

export function startAnalysis() {
  return {
    type: BEGIN_ANALYSIS,
  };
}
