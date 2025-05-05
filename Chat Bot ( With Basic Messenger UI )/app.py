import eel
import google.generativeai as genai

# Configure the Generative AI API
genai.configure(api_key='AIzaSyBlk-AzukxmjqorlZD-q18Jq-A-bfmeHqQ')

eel.init('web')

@eel.expose
def get_response(user_input):
    try:
        model = genai.GenerativeModel('gemini-2.0-flash')
        response = model.generate_content(user_input)
        return response.text
    except Exception as e:
        return f"Error: {str(e)}"

eel.start('index.html', port = 8090)



#genai.configure(api_key='AIzaSyBlk-AzukxmjqorlZD-q18Jq-A-bfmeHqQ')    #Ye API key hai
#model = genai.GenerativeModel('gemini-2.0-flash')
