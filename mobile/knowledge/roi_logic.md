# Knowledge: Mobile ROI & User Value

Every `IMPLEMENTATION_PLAN.md` must contain a 'Business Value' section.

## 1. ROI Formula
- **ROI (%) = [(Total Benefits - Total Costs) / Total Costs] * 100**
- **Payback Period:** Time required to recover the initial investment.

## 2. Variables
- **Costs:** Engineering hours, QA (device fragmentation), binary size optimization.
- **Benefits:** App Store Rating improvement, retention (MAU/DAU), crash rate reduction.

## 3. Mobile Value (Engagement & Retention)
Beyond direct ROI, the Mobile Architect must evaluate:
- **Engagement (DAU/MAU):** Does this feature increase daily or monthly active users?
- **Retention (Stickiness):** Does the app keep users coming back (reduced churn)?
- **Store Visibility (ASO):** Higher performance leads to better store rankings.
- **Conversion (In-App):** Reducing friction in mobile flows (e.g., checkout, login).

## 4. Performance as a Mobile Feature
- **Startup Time:** Users abandon apps that take more than 3 seconds to load.
- **Jank Reduction:** Smooth 60/120 FPS UI increases perceived quality and trust.
- **Binary Size:** Users delete large apps first when storage is low.

## 5. Risk Buffer
- **20% Buffer:** Always add a 20% margin to cost estimates for "unknown-unknowns."
- **Risk Assessment:** Categorize changes as Low, Medium, or High risk based on OS fragmentation and native API dependencies.
