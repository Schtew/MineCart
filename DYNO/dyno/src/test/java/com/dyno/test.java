package com.dyno;

import java.sql.*;

public class test {
    public static void main(String[] args) throws SQLException {
        Connection conn = DB.getConn();
        Statement s = conn.createStatement();
        String req = "SELECT curr_quest, curr_prog FROM users WHERE uuid='31a1e387-61c4-4559-8466-61455c370dd3'";
        ResultSet r = s.executeQuery(req);
        r.next();
        int quest_no = r.getInt(1);
        int quest_prog = r.getInt(2);
        String req2 = "SELECT max_prog FROM quests WHERE quest_no=" + 1;
        r = s.executeQuery(req2);
        r.next();
        System.out.println(quest_no);
        System.out.println(quest_prog);
        System.out.println(r.getDouble(1));



        DB.closeConn();
    }
}
