package hello;

public class Greeting {

    private final long id;
    private final String content;

    public Greeting(long id, String content) {
    	System.out.println("Greeting899");
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}

//https://spring.io/guides/gs/rest-service/
//https://www.java4s.com/spring-boot-tutorials/spring-boot-creating-a-restful-web-service-example/
//https://dzone.com/articles/creating-a-rest-api-with-java-and-spring