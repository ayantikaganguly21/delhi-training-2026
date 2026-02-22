#!/bin/zsh
cd /Users/ayantikagangopadhyay/.gemini/antigravity/scratch/train_lost_and_found
python3 -m venv venv
source venv/bin/activate
pip install python-docx python-pptx
python generate_files.py
zip -r Train_Lost_and_Found_Submission.zip app Prompt_Engineering_Documentation.docx Train_Travel_Presentation.pptx
echo "All files generated and zipped into Train_Lost_and_Found_Submission.zip successfully!"
