import demand from '../assets/work/hospital-operations/demand-baseline.png';
import demandGrowth from '../assets/work/hospital-operations/demand-forecast.png';
import model from '../assets/work/hospital-operations/data-model.png';
import satisfaction from '../assets/work/hospital-operations/patient-satisfaction.png';
import staffing from '../assets/work/hospital-operations/staffing-scenario.png';
import regionalWorkflow from '../assets/work/retail-data/regional-workflow.png';
import dataProfile from '../assets/work/retail-data/cleaned-data-profile.png';
import retailRawProfile from '../assets/work/retail-data/raw-data-profile.png';
import retailNames from '../assets/work/retail-data/name-reconciliation.png';
import retailOrderValue from '../assets/work/retail-data/order-value-calculation.png';
import income from '../assets/work/retail-data/income-segments.png';
import spending from '../assets/work/retail-data/regional-spending.png';
import retailAgeSpending from '../assets/work/retail-data/age-spending.png';
import preparation from '../assets/work/workout-prediction/preparation-workflow.png';
import boosting from '../assets/work/workout-prediction/gradient-boosting.png';
import comparison from '../assets/work/workout-prediction/model-comparison.png';
import workoutCorrelation from '../assets/work/workout-prediction/correlation-heatmap.png';
import workoutLinear from '../assets/work/workout-prediction/linear-regression.png';
import workoutTree from '../assets/work/workout-prediction/decision-tree.png';
import workoutForest from '../assets/work/workout-prediction/random-forest.png';
import benchmark from '../assets/work/student-wellbeing/benchmark-comparison.png';
import distribution from '../assets/work/student-wellbeing/offline-online-distribution.png';

export const analyticsCaptures = {
  demand: {
    image: demand,
    title: 'Patient-demand forecasting and capacity planning',
    alt: 'Power BI Inflow and Operational Forecast dashboard with historical KPIs, a patient-inflow forecast and shaded forecast range, and a growth slider connected to projected volume, staffing needs, and waits by urgency.',
    caption:
      'The baseline view connects patient-demand forecasting with capacity planning. The growth slider lets a planner test how higher demand could affect staffing needs and waiting times across urgency groups.',
  },
  demandBaseline: {
    image: demand,
    title: 'Baseline demand forecast and operational KPIs',
    alt: 'Power BI Inflow and Operational Forecast dashboard with the Growth Simulation at 0%, historical patient inflow, a forecast range, and average staff efficiency, daily inflow, and overtime KPIs.',
    caption:
      'This is the project cover image repeated beside the analysis it introduces. The 0% growth view establishes historical performance and the forecast before a planner tests a higher-demand scenario.',
  },
  demandGrowth: {
    image: demandGrowth,
    title: 'Testing a 20% increase in patient demand',
    alt: 'Power BI forecast dashboard with Growth Simulation set to 20 percent, showing projected inflow of 65.56, staffing need of 4.91, Critical/High wait of 37.56 minutes, and Low/Medium wait of 165.50 minutes.',
    caption:
      'A captured 20% demand-growth scenario brings projected volume, staffing needs, and waits into the same decision view. Historical KPIs remain separate from the scenario estimates.',
  },
  model: {
    image: model,
    title: 'A shared model for three datasets',
    alt: 'Power BI model view showing fact tables connected through a MasterDate dimension and a Department dimension.',
    caption:
      'The star schema gives the separate hospital datasets a common date context, with a department dimension linking the patient and scheduling data.',
  },
  satisfaction: {
    image: satisfaction,
    title: 'Investigating patient experience',
    alt: 'Power BI patient-satisfaction dashboard with urgency filters, wait-time categories, summary cards, and satisfaction plotted against waiting time.',
    caption:
      'Urgency filters and wait-time bands identify patient groups to investigate when prioritizing capacity. In this view, lower-urgency patients experience longer waits and poorer satisfaction.',
  },
  staffing: {
    image: staffing,
    title: 'An adjustable staffing scenario',
    alt: 'Power BI staffing simulator showing staff controls, current satisfaction, predicted wait impact, and a stacked breakdown of waiting time.',
    caption:
      'The staffing control tests a proposed capacity change against modeled waits and satisfaction, using an assumed 15% wait reduction per additional staff member.',
  },
  regionalWorkflow: {
    image: regionalWorkflow,
    title: 'Four regional files become one master table',
    alt: 'KNIME workflow with four Excel Reader nodes, region-label columns, and a Concatenate node combining North, South, East, and West data.',
    caption:
      'Each Excel Reader branch adds its regional label before concatenation. This preserves the source context needed by the later regional analysis, while new row IDs prevent indexing conflicts.',
  },
  retailRawProfile: {
    image: retailRawProfile,
    title: 'Profiling the inputs before treatment',
    alt: 'KNIME Statistics profile showing raw income, purchases, and spending, including a minimum income of 71 and placeholder values of 9999.',
    caption:
      'The initial profile reveals the financial anomalies that drive the cleaning rules. Inspecting ranges and distributions before treatment gives each transformation a reason.',
  },
  dataProfile: {
    image: dataProfile,
    title: 'Checking the financial fields after treatment',
    alt: 'KNIME statistics output showing cleaned income, purchase, and spending ranges with no remaining missing values in those columns.',
    caption:
      'Profiling after rule-based treatment and median imputation checks income, purchases, and spending before they feed the business metrics. The captured profile shows no missing values in those three columns.',
  },
  retailNames: {
    image: retailNames,
    title: 'Reconciling the regional name schemas',
    alt: 'KNIME nodes showing String Manipulation combining first and last names, Column Merger filling the primary Name field, and Column Filter removing the redundant fields.',
    caption:
      'The regional files use different name structures. These three steps reconcile them into one field so downstream reporting can use a consistent schema.',
  },
  retailOrderValue: {
    image: retailOrderValue,
    title: 'Defining the order-value feature',
    alt: 'KNIME Math Formula configuration calculating Average Order Value as Amount Spent divided by Purchases, with an explicit zero-purchase case returning zero.',
    caption:
      'The formula creates a customer-level spending measure and handles zero purchases explicitly. This is the feature later averaged in the regional order-value chart.',
  },
  income: {
    image: income,
    title: 'Customer income segments',
    alt: 'Donut chart showing 652 high-income, 548 medium-income, and 306 low-income customer records.',
    caption:
      'The Numeric Binner income groups become an interpretable customer profile: 652 high-income, 548 medium-income, and 306 low-income records.',
  },
  spending: {
    image: spending,
    title: 'Two spending measures, two regional leaders',
    alt: 'Grouped bar chart comparing average customer spending and average order value across North, South, East, and West.',
    caption:
      'West leads average customer spending; South leads the regional average of customer-level order values. The distinction gives a retailer separate questions to investigate about purchase frequency and order size.',
  },
  retailAgeSpending: {
    image: retailAgeSpending,
    title: 'Testing age as a spending signal',
    alt: 'KNIME scatter plot of customer age against amount spent, with customers concentrated at older ages and no clear upward or downward spending trend.',
    caption:
      'The scatter plot and Pearson correlation of approximately 0.032 give little support for using exact age as a linear spending signal in this dataset. Customer demographics and purchasing behavior answer different questions.',
  },
  preparation: {
    image: preparation,
    title: 'Preparation before model comparison',
    alt: 'KNIME workflow showing CSV intake, duplicate removal, outlier and missing-value checks, heart-rate and BMI calculations, export, and correlation analysis.',
    caption:
      'The workflow carries CSV intake through deduplication, outlier and completeness checks, BMI and heart-rate calculations, correlation analysis, and export. Removing repeated observations before the split protects the later model comparison.',
  },
  workoutCorrelation: {
    image: workoutCorrelation,
    title: 'Exploring the predictors before fitting models',
    alt: 'KNIME correlation matrix of workout measurements and engineered features, with a strong positive relationship between session duration and calories burned.',
    caption:
      'Duration has the strongest linear association with recorded calories. The matrix also exposes relationships among inputs, helping distinguish exploratory associations from the importance rankings produced by fitted models.',
  },
  workoutLinear: {
    image: workoutLinear,
    title: 'A linear baseline with visible residual structure',
    alt: 'SAS linear regression page showing fit summary, curved residual pattern, and predicted versus observed calorie averages across training and validation.',
    caption:
      'The baseline retains duration, average BPM, age, and gender. Curvature in the residuals reveals structure the linear fit misses, despite its competitive validation error.',
  },
  workoutTree: {
    image: workoutTree,
    title: 'Inspectable rules and stepped calorie predictions',
    alt: 'SAS decision tree page showing a duration-led tree, variable importance, and stepped predicted averages compared with observed calorie values.',
    caption:
      'The tree segments workouts using duration, heart rate, and experience. Its constant predictions within leaves make the rules readable while limiting the precision of the continuous calorie estimate.',
  },
  workoutForest: {
    image: workoutForest,
    title: 'Following ensemble error as trees are added',
    alt: 'SAS random forest page showing variable importance, training and validation error by number of trees, and predicted versus observed calorie averages.',
    caption:
      'The error curve decreases and then plateaus. Duration leads the importance ranking, with experience, fat percentage, and average BPM also prominent; validation comparison determines whether the ensemble improves on the baseline.',
  },
  boosting: {
    image: boosting,
    title: 'Inspecting the selected model',
    alt: 'SAS Viya gradient-boosting results with feature importance, training and validation error over iterations, and predicted versus observed averages.',
    caption:
      'The selected candidate combines duration-led feature importance with iteration and assessment plots. Reading training and validation behavior together helps explain the result and keeps the generalization gap visible.',
  },
  comparison: {
    image: comparison,
    title: 'Four models, one validation split',
    alt: 'SAS Viya results table showing training and validation observations, average squared error, and sum of squared error for four regression models.',
    caption:
      'All four models use 681 training and 292 validation observations. Gradient boosting has the lowest validation ASE (1,225.0708, about 35 kcal RMSE), with linear regression close behind.',
  },
  benchmark: {
    image: benchmark,
    title: 'Comparing the sample with a published benchmark',
    alt: 'Bar chart showing the surveyed students’ mean FoMO score of approximately 3.11 against a published benchmark of 2.56.',
    caption:
      'The student mean is approximately 0.55 points above the adult-study reference. The team assessed that gap with a one-sample t-test; the original National Benchmark title refers to this external study, rather than a universal national norm.',
  },
  distribution: {
    image: distribution,
    title: 'Reading in-person and online anxiety beyond the averages',
    alt: 'Two box plots showing the distribution of self-reported anxiety about missing in-person and online experiences among surveyed students.',
    caption:
      'The cover figure compares the centers, spread, and overlap of anxiety scores. Higher in-person means and medians complement the paired analysis, which uses each student’s difference between settings. Chart from the team report.',
  },
};
export type AnalyticsCaptureId = keyof typeof analyticsCaptures;

export const analyticsCovers = {
  'hospital-operations': {
    capture: 'demand',
    label: 'Hospital operations / Power BI',
    detail: 'Patient inflow · Staffing needs · Wait risk',
    metric: 'Forecast + simulation',
  },
  'retail-data': {
    capture: 'regionalWorkflow',
    label: 'Retail customers / KNIME',
    detail: 'Combine · Clean · Mask · Transform · Analyze',
    metric: '4 sources → 1 table',
  },
  'workout-prediction': {
    capture: 'workoutForest',
    label: 'Workout energy / KNIME + SAS Viya',
    detail: 'Audit · Engineer · Model · Evaluate',
    metric: '4 regression models',
  },
  'student-wellbeing': {
    capture: 'distribution',
    label: 'Student wellbeing / Research',
    detail: 'Survey · Analyze · Synthesize',
    metric: '67 responses',
  },
} satisfies Record<
  string,
  { capture: AnalyticsCaptureId; label: string; detail: string; metric: string }
>;
export type AnalyticsProjectId = keyof typeof analyticsCovers;
