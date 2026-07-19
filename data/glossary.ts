export interface GlossaryTerm {
  term: string;
  definition: string;
  example?: string;
  category?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Activation Function",
    definition:
      "A small math function inside each neuron of a neural network that decides how strongly that neuron 'fires' based on its input, which lets the network model complex patterns instead of just straight lines.",
    example: "ReLU, one of the most common activation functions, simply passes positive values through and zeroes out negative ones.",
    category: "Machine Learning",
  },
  {
    term: "Agentic",
    definition:
      "Describes an AI system that can take actions or make decisions on its own within the bounds of its programming, rather than just answering a single question.",
    example: "An agentic AI might research a topic, draft an email, and send it — all from one instruction.",
    category: "Fundamentals",
  },
  {
    term: "Algorithm",
    definition:
      "A step-by-step set of rules or instructions a computer follows to solve a problem or complete a task.",
    example: "A sorting algorithm puts a list of names in alphabetical order.",
    category: "Fundamentals",
  },
  {
    term: "Alignment",
    definition:
      "The effort to make sure an AI system's goals and behavior actually match human values and intentions, so it does what people want rather than something technically correct but harmful or unintended.",
    category: "Ethics & Governance",
  },
  {
    term: "Anomaly Detection",
    definition:
      "A technique for spotting data points or events that look significantly different from the norm, often signaling a problem worth investigating.",
    example: "Banks use anomaly detection to flag a credit card charge that doesn't match a customer's usual spending pattern as possible fraud.",
    category: "Machine Learning",
  },
  {
    term: "Artificial Intelligence (AI)",
    definition:
      "The broad field of building computer systems that can perform tasks — like recognizing patterns, understanding language, or making predictions — that normally require human intelligence. Machine learning is the most common way AI systems are built today.",
    category: "Fundamentals",
  },
  {
    term: "Attention Mechanism",
    definition:
      "A technique that lets a model focus more heavily on the most relevant words or parts of the input while ignoring less important ones, similar to how a person pays closer attention to key details in a conversation.",
    example: "When translating a sentence, an attention mechanism helps the model figure out which words in the original matter most for each word it produces in the translation.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Backpropagation",
    definition:
      "The method neural networks use during training to figure out how wrong a prediction was, then work backward through the network adjusting its internal settings so it does better next time.",
    category: "Machine Learning",
  },
  {
    term: "Bagging (Bootstrap Aggregation)",
    definition:
      "A technique that trains many versions of the same model on slightly different random samples of the data, then combines their answers to get a more stable, accurate result than any single model alone.",
    example: "Random Forest is a well-known model built by bagging together many decision trees.",
    category: "Machine Learning",
  },
  {
    term: "Batch Size",
    definition:
      "The number of training examples a model looks at before it updates its internal settings during training.",
    example: "A batch size of 32 means the model reviews 32 examples, adjusts itself, then moves to the next 32.",
    category: "Machine Learning",
  },
  {
    term: "Bias and Fairness",
    definition:
      "In AI, bias means a model consistently makes skewed predictions, often because its training data doesn't fairly represent the real world. Left unchecked, it can produce discriminatory outcomes even without anyone intending it.",
    example: "A loan-approval model trained mostly on data from one type of applicant may unfairly deny qualified applicants from other groups.",
    category: "Ethics & Governance",
  },
  {
    term: "Bias-Variance Tradeoff",
    definition:
      "The balancing act between building a model that's too simple to capture real patterns (high bias, 'underfitting') and one so complex it just memorizes noise in the training data (high variance, 'overfitting'). Good models find the sweet spot in between.",
    category: "Machine Learning",
  },
  {
    term: "Boosting",
    definition:
      "An ensemble technique that builds models one after another, where each new model focuses on correcting the mistakes of the ones before it, gradually improving overall accuracy.",
    example: "XGBoost, a popular boosting algorithm, is widely used because of its strong accuracy right out of the box.",
    category: "Machine Learning",
  },
  {
    term: "Chatbot",
    definition:
      "A software application that uses natural language processing to hold a conversation with a person, answering questions or completing tasks through text or voice.",
    example: "A customer service chatbot on a website that answers order-status questions instantly, day or night.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Classification",
    definition:
      "A type of prediction task where a model sorts input into one of several predefined categories rather than predicting a number.",
    example: "Sorting incoming emails into 'spam' or 'not spam' is a classification problem.",
    category: "Machine Learning",
  },
  {
    term: "Clustering",
    definition:
      "An unsupervised technique that groups similar data points together based on shared characteristics, without anyone telling the model what the groups should be in advance.",
    example: "A retailer might use clustering to discover natural customer segments — like 'bargain hunters' versus 'brand loyalists' — without predefining those labels.",
    category: "Machine Learning",
  },
  {
    term: "Collaborative Filtering",
    definition:
      "A recommendation approach that suggests items to you based on what people with similar tastes have liked, rather than analyzing the item's content directly.",
    example: "Netflix recommending a show because viewers with similar watch histories also enjoyed it.",
    category: "Business & Strategy",
  },
  {
    term: "Computer Vision",
    definition:
      "The branch of AI focused on teaching computers to interpret and understand images and video, similar to how humans use their eyes to make sense of the world.",
    example: "A security camera system that automatically detects when a person enters a restricted area.",
    category: "Machine Learning",
  },
  {
    term: "Confusion Matrix",
    definition:
      "A simple table used to see how well a classification model performed, breaking out correct and incorrect predictions by category.",
    category: "Machine Learning",
  },
  {
    term: "Context Window",
    definition:
      "The amount of text — measured in words or tokens — that a language model can 'see' and consider at once when generating a response. Anything outside that window is effectively forgotten.",
    example: "If a document is longer than a model's context window, the model may lose track of details from earlier in the document.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Convolutional Neural Network (CNN)",
    definition:
      "A type of neural network designed to recognize patterns in images, such as edges, shapes, and objects, by scanning small regions of an image at a time.",
    example: "CNNs power facial recognition systems and medical imaging tools that flag potential problems on X-rays.",
    category: "Machine Learning",
  },
  {
    term: "Cost Function",
    definition:
      "A formula that measures how far off a model's predictions are from the actual correct answers. Training a model essentially means adjusting it to make this number as small as possible.",
    category: "Machine Learning",
  },
  {
    term: "Cross-Validation",
    definition:
      "A way of testing a model's performance more reliably by splitting the data into several chunks, training on some and testing on the rest, then rotating through all the combinations and averaging the results.",
    example: "In 5-fold cross-validation, the data is split into 5 parts and the model is trained and tested five separate times, so every part gets a turn as the test set.",
    category: "Machine Learning",
  },
  {
    term: "Data",
    definition:
      "The raw facts, numbers, or observations that feed into an AI or analytics system before anything has been organized or analyzed.",
    example: "Customer names, purchase amounts, and timestamps in a sales database are all data.",
    category: "Fundamentals",
  },
  {
    term: "Data Augmentation",
    definition:
      "Creating additional training examples by slightly altering existing data, which helps a model generalize better without needing to collect brand-new data.",
    example: "Flipping, rotating, or slightly cropping photos to give an image-recognition model more variety to learn from.",
    category: "Data",
  },
  {
    term: "Data Cleaning",
    definition:
      "The process of finding and fixing errors, gaps, and inconsistencies in a dataset — like duplicate records or missing values — before it's used to train or run a model.",
    category: "Data",
  },
  {
    term: "Data Ingestion",
    definition:
      "The process of pulling data from its original sources — databases, files, sensors, apps — into a system where it can be stored, organized, and eventually analyzed.",
    category: "Data",
  },
  {
    term: "Data Pipeline",
    definition:
      "A connected series of steps that automatically moves and transforms data — cleaning it, reshaping it, combining it — on its way from raw source to a model or report.",
    category: "Data",
  },
  {
    term: "Data Wrangling",
    definition:
      "The hands-on work of converting messy, raw data into a clean, usable format — sometimes called 'data munging' — so it's ready for analysis or modeling.",
    category: "Data",
  },
  {
    term: "Decision Tree",
    definition:
      "A model that makes predictions by asking a series of yes/no or either/or questions, branching like a flowchart until it lands on an answer. It's popular because the logic is easy for people to follow and explain.",
    example: "A loan-approval decision tree might ask 'Income above $50k?' then 'Credit score above 650?' before reaching an approve/deny decision.",
    category: "Machine Learning",
  },
  {
    term: "Deep Learning",
    definition:
      "A branch of machine learning that uses neural networks with many stacked layers to learn increasingly complex patterns in data, powering things like image recognition and language models.",
    category: "Machine Learning",
  },
  {
    term: "Dimensionality Reduction",
    definition:
      "A set of techniques for simplifying data that has a huge number of variables down to a smaller, more manageable set that still captures the important patterns — useful both for speeding up models and for making data easier for people to visualize.",
    category: "Machine Learning",
  },
  {
    term: "Dropout",
    definition:
      "A training trick where a neural network randomly ignores some of its own neurons during each training pass, which forces it not to over-rely on any one piece and helps prevent overfitting.",
    category: "Machine Learning",
  },
  {
    term: "Embedding",
    definition:
      "A way of converting words, images, or other data into lists of numbers (vectors) positioned so that similar items end up numerically close together, letting a model mathematically reason about meaning and similarity.",
    example: "In a good embedding space, the words 'king' and 'queen' end up much closer to each other than 'king' and 'banana.'",
    category: "Machine Learning",
  },
  {
    term: "Ensemble Learning",
    definition:
      "The strategy of combining several models together to get a better, more reliable prediction than any single model could produce alone.",
    example: "Random Forest and boosting are both ensemble methods that combine many decision trees.",
    category: "Machine Learning",
  },
  {
    term: "Epoch",
    definition:
      "One complete pass through the entire training dataset during a model's training process.",
    example: "Training a model for 10 epochs means the full dataset is shown to the model 10 separate times.",
    category: "Machine Learning",
  },
  {
    term: "F1 Score",
    definition:
      "A single accuracy score for a classification model that balances two things it needs to get right — catching all the true positives (recall) and not falsely flagging things that aren't (precision) — into one number.",
    category: "Machine Learning",
  },
  {
    term: "Feature",
    definition:
      "A measurable input variable that describes something about the data a model is learning from, like a column in a spreadsheet.",
    example: "In a house-price model, square footage, number of bedrooms, and zip code are all features.",
    category: "Data",
  },
  {
    term: "Feature Extraction",
    definition:
      "The process of pulling out the most useful, relevant pieces of information from raw, complex data — like an image or a paragraph of text — so a model has a simpler, more meaningful input to learn from.",
    category: "Machine Learning",
  },
  {
    term: "Fine-Tuning",
    definition:
      "Taking a model that's already been trained on a broad dataset and giving it additional, more specific training so it performs better on a narrower task.",
    example: "Taking a general image-recognition model and fine-tuning it to specifically identify different dog breeds.",
    category: "Machine Learning",
  },
  {
    term: "Generative Adversarial Network (GAN)",
    definition:
      "A system made of two competing neural networks — a 'generator' that creates fake data and a 'discriminator' that tries to catch the fakes — that improve each other through competition until the generator produces highly realistic output.",
    example: "GANs are behind many deepfake videos and AI-generated faces of people who don't actually exist.",
    category: "Generative AI & LLMs",
  },
  {
    term: "GPT",
    definition:
      "Short for 'Generative Pre-trained Transformer,' GPT is a family of large language models, built by OpenAI, that generate human-like text by predicting the next word in a sequence based on everything that came before it.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Gradient Descent",
    definition:
      "The core optimization method most machine learning models use to improve during training: it repeatedly nudges the model's internal settings in the direction that reduces prediction error the fastest, until the error stops improving.",
    category: "Machine Learning",
  },
  {
    term: "Ground Truth",
    definition:
      "The verified, correct answer used to train and evaluate a model — essentially the answer key its predictions are checked against.",
    category: "Machine Learning",
  },
  {
    term: "Hallucination",
    definition:
      "When an AI system confidently states something false or made-up as if it were fact. It happens because the model is predicting plausible-sounding text, not actually checking truth against a source.",
    example:
      "An AI assistant inventing a court case citation that sounds real but doesn't exist is a classic hallucination.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Homomorphic Encryption",
    definition:
      "An advanced form of encryption that lets a system perform calculations directly on encrypted data without ever decrypting it, so sensitive information — like medical or financial records — can be analyzed without ever being exposed.",
    category: "Ethics & Governance",
  },
  {
    term: "Hyperparameter",
    definition:
      "A setting that's chosen before training begins and controls how a model learns, as opposed to the model's internal parameters, which are learned automatically from the data.",
    example: "The learning rate, which controls how big a step the model takes while adjusting itself during training, is a hyperparameter.",
    category: "Fundamentals",
  },
  {
    term: "Imbalanced Data",
    definition:
      "A dataset where one outcome is far more common than another, which can quietly bias a model toward always predicting the majority outcome.",
    example: "If 98% of transactions in a fraud dataset are legitimate, a lazy model could get 98% accuracy just by always guessing 'not fraud' — while missing every actual fraud case.",
    category: "Machine Learning",
  },
  {
    term: "Inference",
    definition:
      "The moment a trained model is put to work making a prediction on new data it hasn't seen before, as opposed to the earlier training phase.",
    example: "After a spam filter is trained, using it to judge whether a brand-new incoming email is spam is inference.",
    category: "Fundamentals",
  },
  {
    term: "K-Nearest Neighbors (k-NN)",
    definition:
      "A simple prediction method that classifies a new data point by looking at the most similar examples already in the dataset — its 'nearest neighbors' — and going with whatever answer is most common among them.",
    example: "A recommendation engine might suggest products that are most similar to ones a customer already bought.",
    category: "Machine Learning",
  },
  {
    term: "Large Language Model (LLM)",
    definition:
      "An AI model trained on massive amounts of text that learns statistical patterns in language well enough to generate, summarize, translate, or answer questions in a way that reads as human-written.",
    example: "ChatGPT and Claude are both built on large language models.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Long Short-Term Memory (LSTM)",
    definition:
      "A specialized type of neural network built to handle sequences of data — like sentences or time series — by remembering relevant information over long stretches while forgetting what's no longer useful.",
    category: "Machine Learning",
  },
  {
    term: "Machine Learning",
    definition:
      "A subset of AI in which a computer system learns patterns directly from data and improves its predictions over time, instead of being explicitly programmed with fixed rules.",
    example: "Email spam filters get smarter over time by learning from which messages users mark as spam.",
    category: "Fundamentals",
  },
  {
    term: "Mean Absolute Error (MAE)",
    definition:
      "A way of measuring how far off, on average, a model's predictions are from the actual values, without letting a few big misses distort the picture the way squared-error measures like RMSE can.",
    category: "Machine Learning",
  },
  {
    term: "Model",
    definition:
      "The trained system — built from an algorithm and data — that a computer actually uses to make predictions or decisions.",
    category: "Fundamentals",
  },
  {
    term: "Model Evaluation",
    definition:
      "The process of measuring how well a trained model actually performs, using metrics like accuracy, precision, or error rate, so you know whether it's ready to trust with real decisions.",
    category: "Machine Learning",
  },
  {
    term: "Natural Language Processing (NLP)",
    definition:
      "The field of AI focused on enabling computers to understand, interpret, and generate human language — essentially, the technology behind chatbots, translation tools, and voice assistants.",
    example: "Siri and Alexa both rely on NLP to understand spoken requests and respond appropriately.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Network Effect",
    definition:
      "A phenomenon where a product or service becomes more valuable to every user as more people use it.",
    example: "A messaging app becomes far more useful once your friends and colleagues are on it too.",
    category: "Business & Strategy",
  },
  {
    term: "Neural Network",
    definition:
      "A machine learning model loosely inspired by the structure of the human brain, made of layers of connected 'nodes' that pass signals to each other to learn patterns in data.",
    category: "Fundamentals",
  },
  {
    term: "Normalization",
    definition:
      "Rescaling data so that different variables are on a comparable scale, which keeps a model from unfairly weighting a variable just because its numbers happen to be larger.",
    example: "Without normalization, a model might overweight 'home price' (in the hundreds of thousands) compared to 'number of bedrooms' (a single digit), even if bedrooms matter just as much.",
    category: "Machine Learning",
  },
  {
    term: "One-Hot Encoding",
    definition:
      "A way of converting a category, like a color or a day of the week, into a set of numeric columns a model can use — marking a '1' for whichever category applies and '0' for the rest.",
    category: "Machine Learning",
  },
  {
    term: "OpenAI",
    definition:
      "The AI research and product company, founded in 2015 and led by Sam Altman, that created the GPT model family and ChatGPT.",
    category: "Business & Strategy",
  },
  {
    term: "Outlier",
    definition:
      "A data point that sits far outside the normal range of the rest of the dataset, which can distort a model's results if it's not identified and handled deliberately.",
    example: "In a class of students scoring 60-85 on a test, a single score of 100 would stand out as an outlier.",
    category: "Machine Learning",
  },
  {
    term: "Overfitting",
    definition:
      "A modeling mistake where a model learns the training data too well — including its noise and quirks — so it performs great on data it's already seen but poorly on new, real-world data.",
    example: "A stock-prediction model trained only on one month's data may look accurate in testing but fail badly the next month.",
    category: "Machine Learning",
  },
  {
    term: "Parameter",
    definition:
      "An internal value a model learns and adjusts automatically during training, which shapes how it turns input into output. The more parameters a model has, the more complex the patterns it can potentially capture.",
    category: "Fundamentals",
  },
  {
    term: "Perplexity",
    definition:
      "A score used to judge how good a language model is at predicting the next word in a sequence — the lower the perplexity, the more confidently and accurately the model is predicting.",
    category: "Fundamentals",
  },
  {
    term: "Precision and Recall",
    definition:
      "Two ways of judging a classification model's accuracy: precision measures how often its positive predictions are actually correct, while recall measures how many of the real positive cases it successfully caught.",
    example: "In disease screening, high recall means catching nearly every sick patient, while high precision means the patients flagged as sick almost always really are.",
    category: "Machine Learning",
  },
  {
    term: "Principal Component Analysis (PCA)",
    definition:
      "A technique for simplifying data with many variables down to a small handful of 'composite' variables that still capture most of the original information, often used to make complex data easier to visualize or process.",
    category: "Machine Learning",
  },
  {
    term: "Prompt Engineering",
    definition:
      "The practice of carefully wording the instructions given to an AI model to get more accurate, relevant, or useful output.",
    example: "Asking an AI 'Summarize this in 3 bullet points for a non-technical executive' instead of just 'Summarize this' is prompt engineering.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Random Forest",
    definition:
      "A widely used model that builds a large number of decision trees on random subsets of the data and combines their votes into one final, more reliable prediction.",
    category: "Machine Learning",
  },
  {
    term: "Recommender System",
    definition:
      "Software that analyzes a person's past behavior and preferences to suggest products, content, or actions they're likely to want next.",
    example: "'Customers who bought this also bought…' suggestions on an e-commerce site.",
    category: "Business & Strategy",
  },
  {
    term: "Recurrent Neural Network (RNN)",
    definition:
      "A type of neural network designed for sequential data, built with loops that let information from earlier in a sequence carry forward and inform later predictions.",
    example: "Older language models used RNNs to keep track of word order when generating text.",
    category: "Machine Learning",
  },
  {
    term: "Regression",
    definition:
      "A type of prediction task where the model estimates a continuous number rather than sorting into categories.",
    example: "Predicting a house's sale price based on its size, location, and age is a regression problem.",
    category: "Machine Learning",
  },
  {
    term: "Regularization",
    definition:
      "A set of techniques that discourage a model from becoming overly complex, which helps prevent it from overfitting to quirks in the training data and improves how well it generalizes to new data.",
    category: "Machine Learning",
  },
  {
    term: "Reinforcement Learning",
    definition:
      "A training approach where an AI agent learns by trial and error, receiving rewards for good actions and penalties for bad ones, gradually learning the strategy that earns the most reward over time.",
    example: "A robot learning to walk by being 'rewarded' each time it takes a step forward without falling.",
    category: "Machine Learning",
  },
  {
    term: "Retrieval-Augmented Generation (RAG)",
    definition:
      "A technique where an AI model looks up relevant information from your own documents or a trusted source before answering, instead of relying only on what it memorized during training. It cuts down on hallucinations and lets AI answer questions about your specific business.",
    example:
      "A customer support AI using RAG can pull the exact answer from your current product manual rather than guessing from general knowledge.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Semantic Analysis",
    definition:
      "The process an AI system uses to understand the actual meaning and context behind words and sentences, not just recognize the words themselves.",
    example: "Recognizing that 'bank' means a financial institution in one sentence and a riverbank in another is semantic analysis.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Stop Words",
    definition:
      "Extremely common words — like 'the,' 'and,' or 'is' — that are often filtered out of text data before analysis because they carry little useful meaning on their own.",
    category: "Data",
  },
  {
    term: "Supervised Learning",
    definition:
      "A machine learning approach where a model learns from data that's already labeled with the correct answer, so it can learn to predict that label on new, unlabeled examples.",
    example: "Training a model on emails already tagged 'spam' or 'not spam' so it can classify new emails on its own.",
    category: "Machine Learning",
  },
  {
    term: "System 1 / System 2 Thinking",
    definition:
      "A concept from psychology, popularized by Daniel Kahneman, describing two modes of thought — System 1 is fast, automatic, and intuitive, while System 2 is slow, deliberate, and analytical. It's a useful lens for AI: tools are often built to handle System 1-style pattern recognition at scale, while people stay responsible for System 2-style judgment calls.",
    category: "Fundamentals",
  },
  {
    term: "Tokenization",
    definition:
      "The process of breaking text into smaller pieces — words, parts of words, or characters — called tokens, which is how language models actually read and generate text.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Training Data and Testing Data",
    definition:
      "Training data is the data a model learns from; testing data is a separate, held-back set used afterward to check how well the model actually performs on examples it's never seen.",
    category: "Machine Learning",
  },
  {
    term: "Transfer Learning",
    definition:
      "Taking a model that already learned useful patterns on one task and reusing that foundation to jump-start learning on a new, related task, instead of starting from scratch.",
    example: "Reusing a general image-recognition model as the starting point for a specialized medical-imaging tool.",
    category: "Machine Learning",
  },
  {
    term: "Transformer",
    definition:
      "The neural network architecture — built around the attention mechanism — that underlies nearly all modern large language models, including GPT and Claude. It lets a model weigh the relationships between all the words in a passage at once, rather than reading strictly word by word.",
    category: "Generative AI & LLMs",
  },
  {
    term: "Underfitting",
    definition:
      "A modeling mistake where a model is too simple to capture the real patterns in the data, so it performs poorly on both the training data and new data.",
    example: "Trying to fit a straight line to data that actually follows a curve will underfit and produce weak predictions.",
    category: "Machine Learning",
  },
  {
    term: "Unsupervised Learning",
    definition:
      "A machine learning approach where a model looks for patterns and structure in data on its own, without being given labeled correct answers to learn from.",
    example: "Automatically grouping customers into segments based on purchasing behavior, without predefining what those segments should be.",
    category: "Machine Learning",
  },
  {
    term: "Vector",
    definition:
      "An ordered list of numbers that represents a piece of data with both a magnitude and, often, a direction — the basic mathematical building block AI models use to represent words, images, and other information.",
    category: "Fundamentals",
  },
];
