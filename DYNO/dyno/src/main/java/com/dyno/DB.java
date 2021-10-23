package com.dyno;

import java.sql.*;

import org.bukkit.Bukkit;
public class DB {
    private static String dbName = "dbname";
    private static String host = "database-1.cg8jgzpyr3ex.us-east-2.rds.amazonaws.com";
    private static String port = "3306";
    private static final String CONNECTION_STRING = "jdbc:mysql:aws://" + host + ":" + port + "/" + dbName;
    private static final String USERNAME = "admin";
    private static final String PASSWORD = "minecWaft";
    private static Connection conn;

    static Connection getConn() {
        if (conn != null) {
            return conn;
        } else {
            makeConn();
            return conn;
        }
    }
    private static Connection makeConn() {
        //Bukkit.getLogger().info("Connection Tried");
        try {
            Class.forName("software.aws.rds.jdbc.mysql.Driver");
            conn = DriverManager.getConnection(CONNECTION_STRING, USERNAME, PASSWORD);
            //Bukkit.getLogger().info("Connection established");
            return conn;
        }
        catch (SQLException e) {
            //Bukkit.getLogger().info("Connection Failed: " + e.getMessage());
        }
        catch (ClassNotFoundException e) {
            //Bukkit.getLogger().info("Driver not found: " + e.getMessage());

        }
        return null;
    }

    public static void closeConn() {
        if (conn == null) {
            return;
        }
        try {
            conn.close();
            //Bukkit.getLogger().info("Conenction closed");
        } catch (SQLException e) {
            //Bukkit.getLogger().info("" + e.getErrorCode()); 
        }
    }
}
