<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

<%@ page contentType="text/html; charset=UTF-8" import="javax.script.ScriptEngine" %>
<%@ page contentType="text/html; charset=UTF-8" import="javax.script.ScriptEngineManager" %>
<%@ page contentType="text/html; charset=UTF-8" import="javax.script.ScriptException" %>

<%
	ScriptEngineManager s = new ScriptEngineManager();
	ScriptEngine engine = s.getEngineByName("JavaScript");

	String exp = request.getParameter("output");
	int result = 0;

	try {
		result = (int)engine.eval(exp);
	} catch (ScriptException e) {
		e.printStackTrace();
	}
%>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>계산기 응용하기 - JSP</title>
  </head>
  <body>
    <h2>계산기 응용하기 - JSP</h2>
    <hr />
    계산 결과: <%=result%>
  </body>
</html>
