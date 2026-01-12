import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Scanner;
import org.json.JSONObject;

public class Clima {
    public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o nome da cidade:");
        String cidade = scanner.nextLine();

        try {
            String dadosClimaticos = getDadosClimaticos(cidade); //json

            if (dadosClimaticos.contains("\"code\":1006")){ // \"code\":1006 representa "code":1006
                System.out.println("Cidade não encontrada. Por favor, verifique o nome e tente novamente.");
            } else {
                imprimirDadosClimaticos(dadosClimaticos);
            }
        } catch (Exception e) {
            System.out.println("Ocorreu um erro ao obter os dados climáticos: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }

    public static String getDadosClimaticos(String cidade) throws Exception {
        //String apiKey = Files.readString(Paths.get("apiKey.txt")).trim();
        String apiKey = Files.readString(
                Paths.get("src/resources/apiKey.txt"),
                StandardCharsets.UTF_8
        ).trim();


        String formataNomeCidade = URLEncoder.encode(cidade, StandardCharsets.UTF_8);
        String apiUrl = "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + formataNomeCidade;

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(apiUrl))
                .build();//constrói a requisição

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());//pega a resposta da api
        return response.body();
    }

    public static void imprimirDadosClimaticos(String dadosClimaticos) {
//        System.out.println("Dados Climáticos:\n" + dadosClimaticos);
        JSONObject dadosJson = new JSONObject(dadosClimaticos);
        JSONObject informacoesMeteorologicas = dadosJson.getJSONObject("current");

        // Extrai os dados da localização

        String cidade = dadosJson.getJSONObject("location").getString("name");
        String pais = dadosJson.getJSONObject("location").getString("country");

        // Extrai os dados meteorológicos
        String condicaoTempo = informacoesMeteorologicas.getJSONObject("condition").getString("text");
        int umidade = informacoesMeteorologicas.getInt("humidity");
        float velocidadeVento = informacoesMeteorologicas.getFloat("wind_kph");
        float pressaoAtmosferica = informacoesMeteorologicas.getFloat("pressure_mb");
        float sensacaoTermica = informacoesMeteorologicas.getFloat("feelslike_c");
        float temperaturaAtual = informacoesMeteorologicas.getFloat("temp_c");

        // Data e hora
        String dataHoraString = informacoesMeteorologicas.getString("last_updated");

        // Imprime os dados formatados

        System.out.println("Informações Meteorológicas para " + cidade + ", " + pais);
        System.out.println("Data e Hora da Última Atualização: " + dataHoraString);
        System.out.println("Temperatura Atual: " + temperaturaAtual + "°C");
        System.out.println("Sensação Térmica: " + sensacaoTermica + "°C");
        System.out.println("Condição do Tempo: " + condicaoTempo);
        System.out.println("Umidade: " + umidade + "%");
        System.out.println("Velocidade do Vento: " + velocidadeVento + " km/h");
        System.out.println("Pressão Atmosférica: " + pressaoAtmosferica + " mb");
    }
}